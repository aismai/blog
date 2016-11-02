import AuthenticatedRoute from '../authenticated-route';

export default AuthenticatedRoute.extend({

  model() {
    const blog = this.modelFor('blogs.show');
    if(!blog.get('isAuthor')){
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
      post.save().then((savedPost) => {
        const blog = savedPost.get('blog');
        blog.get('posts').pushObject(savedPost);
        blog.save().then(() => {
          this.transitionTo('posts');
        });
      });
    },

    willTransition() {
      this.controller.get('model').unloadRecord();
    }

  }
});
