import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('user', {
      registration: new Date()
    });
  },

  actions: {
    save(user) {
      user.save().then(() => {
        this.transitionTo('login');
      });
    }
  }
});
