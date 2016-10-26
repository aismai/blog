import AuthenticatedRoute from '../authenticated-route';

export default AuthenticatedRoute.extend({
  model(params){
    return this.store.findRecord('blog', params.blog_id);
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('title', 'Edit Blog');
    controller.set('buttonLabel', 'Save Changes');
  },

  actions: {
    save(blog) {
      blog.save().then(() => {
        this.transitionTo('blogs');
      });
    },

    willTransition(transition) {
      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");
        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }

  }
});
