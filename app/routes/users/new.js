import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('user');
  },

  actions: {
    save(user) {
      //TODO: authorize new user after save. No need to login
      //done
      user.save().then((savedUser) => {
        this.get('authManager').initializeCurrentUser(savedUser).then(() =>{
          this.transitionTo('blogs');
        });
      });
    }
  }
});
