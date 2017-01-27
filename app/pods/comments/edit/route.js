import AuthenticatedRoute from '../../athenticated-route/route';
import Ember from 'ember';
export default AuthenticatedRoute.extend({
  activityService: Ember.inject.service('activity-service'),

  model(param) {
    const commentPromise = this.store.findRecord('comment', param.comment_id);
    commentPromise.then((comment) => {
      if (!comment.get('isAuthor')) {
        this.transitionTo('comments');
      }
    });
    return commentPromise;
  },

  actions: {
    save(comment) {
      comment.save({ adapterOptions: { flashMessage: true } })
        .then(() => {
          this.get('activityService')
              .createActivity('comment-edit', comment);
          this.transitionTo('comments');
        });
    },

    willTransition(transition) {
      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");
        if (confirmation) {
          model.unloadRecord();
        } else {
          transition.abort();
        }
      }
    }
  }
});
