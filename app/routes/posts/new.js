import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel(){
    const author = this.modelFor('blogs.show').get('user');
    if(this.get('authManager.currentUser.email') !== author.get('email')){
      this.transitionTo('blogs');
    }
  },

  model() {
    return this.store.createRecord('post', {
      blog: this.modelFor('blogs.show'),
      user: this.get('authManager.currentUser')
    });
  },

  setupController: function (controller, model) {
    this._super(controller, model);

    controller.set('title', 'Create new Post');
    controller.set('buttonLabel', 'Create');
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
