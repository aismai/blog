import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('post', {
      blog: this.modelFor('blogs.show')
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
