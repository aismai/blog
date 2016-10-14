import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('blog');
  },

  setupController: function (controller, model) {
    this._super(controller, model);

    controller.set('title', 'Create new Blog');
    controller.set('buttonLabel', 'Create');
  },

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
