import AuthenticatedRoute from '../authenticated-route';

export default AuthenticatedRoute.extend({

  actions: {
    save(blog) {
      blog.save().then(() => {
        this.transitionTo('blogs');
      });
    },

    // willTransition() {
    //   this.controller.get('model').unloadRecord();
    // }
  }
});
