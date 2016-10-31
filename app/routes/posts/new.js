import AuthenticatedRoute from '../authenticated-route';

export default AuthenticatedRoute.extend({

  beforeModel(){
    const blog = this.modelFor('blogs.show');
    if(!blog.get('isAuthor')){
      this.transitionTo('blogs');
    }
  },

  model() {
    return this.store.createRecord('post', {
      blog: this.modelFor('blogs.show'),
      user: this.get('authManager.currentUser')
    });
  },

  actions: {
    save(post) {
      post.save().then(() => {
        const blog = post.get('blog');
        blog.get('posts').pushObject(post);

        blog.save().then(() => {
          this.transitionTo('posts');
        });
        //TODO: use promise on save
        // done
      });
    },

    willTransition() {
      this.controller.get('model').unloadRecord();
    }

  }
});
