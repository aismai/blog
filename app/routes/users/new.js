import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('user');
  },

  actions: {
    save(user) {

      //TODO: authorize new user after save. No need to login
      user.save().then(() => {
        this.transitionTo('login');
      });
    }
  }
});
