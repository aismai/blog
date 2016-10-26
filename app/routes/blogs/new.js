import AuthenticatedRoute from '../authenticated-route';

export default AuthenticatedRoute.extend({
  model(){
    return this.store.createRecord('blog', {
      user: this.get('authManager.currentUser')
    });
  },

  setupController: function (controller, model) {
    this._super(controller, model);

    controller.set('title', 'Create new Blog');
    controller.set('buttonLabel', 'Create');
  },


  //TODO: remove this method
  renderTemplate() {
    this.render('blogs/form');
  },

  actions: {
    save(blog) {
      blog.save().then(() => {
        this.transitionTo('blogs');
      });
    },

    willTransition() {
      this.controller.get('model').rollbackAttributes();
    }
  }
});
