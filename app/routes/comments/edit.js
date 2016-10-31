import AuthenticatedRoute from '../authenticated-route';

export default AuthenticatedRoute.extend({

  beforeModel(transition) {
    this._super(...arguments);
    this.store.findRecord('comment', transition.params['comments.edit'].comment_id).then((comment) => {
      if(!comment.get('isAuthor')) transition.abort();
    });
  },

  model(param) {
    this.store.findRecord('comment', param.comment_id);
  },

  actions: {
    save(comment) {
      comment.save().then(() => {
        this.transitionTo('comments');
      });
    },

    willTransition(transition) {
      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");
        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }

  }
});
