import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('blog');
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
