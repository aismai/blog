import AuthenticatedRoute from '../../athenticated-route/route';
import Ember from 'ember';
export default AuthenticatedRoute.extend({
  userService: Ember.inject.service(),
  postService: Ember.inject.service(),

  model() {
    const blog = this.modelFor('blogs.show');
    if (!blog.get('isAuthor')) {
      this.transitionTo('posts');
    } else {
      return this.store.createRecord('post', {
        blog: blog,
        user: this.get('authService.currentUser')
      });
    }
  },

  actions: {
    save(post) {
      this.get('postService').savePost(post);
    },

    willTransition() {
      this.controller.get('model')
          .unloadRecord();
    }

  }
});
