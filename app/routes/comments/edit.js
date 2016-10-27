import Ember from 'ember';

export default Ember.Route.extend({
  model(param) {
    this.store.findRecord('comment', param.comment_id);
  },

  // setupController(controller, model){
  //   this._super(controller, model);
  //   controller.set()
  // },

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
