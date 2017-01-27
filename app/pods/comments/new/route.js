import AuthenticatedRoute from '../../athenticated-route/route';
import Ember from 'ember';

export default AuthenticatedRoute.extend({

  activityService: Ember.inject.service('activity-service'),

  model() {
    return this.store.createRecord('comment', {
      post: this.modelFor('posts.show'),
      user: this.get('authService.currentUser')
    });
  },

  actions: {
    save(comment) {
      comment.save()
             .then((savedComment) => {
               this.get('postService')
                   .postAddObject(savedComment.get('post'), savedComment)
                   .then(() => {
                     this.get('userService')
                         .userAddObject(savedComment.get('user'), savedComment)
                         .then(() => {
                           this.get('activityService')
                               .createActivity('comment-create', savedComment);
                           this.transitionTo('comments');
                         });
                   });
             });
    },

    willTransition() {
      this.controller.get('model')
          .unloadRecord();
    }
  }
});
