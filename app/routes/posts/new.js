import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel(){
    const author = this.modelFor('blogs.show').get('user');
    if(this.get('authManager.currentUser.email') != author.get('email')){
      console.log('NOT AN AUTHOR');
      this.transitionTo('posts');
    }
  },

  model() {
    return this.store.createRecord('post', {
      blog: this.modelFor('blogs.show'),
      user: this.get('authManager.currentUser')
    });
  },

  actions: {
    savePost(post) {
      post.save().then(() => {
        const blog = post.get('blog');
        blog.get('posts').pushObject(post);
        blog.save();
        this.transitionTo('posts');
      });
    },

    willTransition() {
      this.controller.get('model').rollbackAttributes();
    }
  }
});