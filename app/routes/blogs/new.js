import AuthenticatedRoute from '../authenticated-route';

export default AuthenticatedRoute.extend({

  model(){
    return this.store.createRecord('blog', {
      user: this.get('authManager.currentUser')
    });
  },

  actions: {
    save(blog) {
      blog.save().then(() => {
        this.transitionTo('blogs');
      });
    },

    willTransition() {
      this.controller.get('model').unloadRecord();
    }
  }
});
