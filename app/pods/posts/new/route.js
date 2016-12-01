import AuthenticatedRoute from '../../../routes/authenticated-route';

export default AuthenticatedRoute.extend({

  model() {
    const blog = this.modelFor('blogs.show');
    if (!blog.get('isAuthor')) {
      this.transitionTo('posts');
    } else {
      return this.store.createRecord('post', {
        blog: blog,
        user: this.get('authManager.currentUser')
      });
    }
  },

  actions: {
    save(post) {
      post.save()
          .then((savedPost) => {
            const blog = savedPost.get('blog');
            const user = savedPost.get('user');
            user.get('posts')
                .pushObject(savedPost);
            user.save();
            blog.get('posts')
                .pushObject(savedPost);
            blog.save()
                .then(() => {
                  this.transitionTo('posts');
                });
          });
    },

    willTransition() {
      this.controller.get('model')
          .unloadRecord();
    }

  }
});
