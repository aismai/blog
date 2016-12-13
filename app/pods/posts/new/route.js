import AuthenticatedRoute from '../../athenticated-route/route';
import Ember from 'ember';
export default AuthenticatedRoute.extend({
  userService: Ember.inject.service(),

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
      post.save()
        .then((savedPost) => {
            this.get('userService').userAddObject(savedPost.get('user'), savedPost);
            this.get('blogService').blogAddObject(savedPost.get('blog'), savedPost)
              .then(() => {
                  this.transitionTo('posts');
                }
              );
          }
        );
    },

    willTransition() {
      this.controller.get('model')
        .unloadRecord();
    }

  }
});
