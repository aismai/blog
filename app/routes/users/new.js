import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('user');
  },

  actions: {
    save(user) {
      user.save()
          .then((savedUser) => {
            this.get('authManager')
                .initializeCurrentUser(savedUser)
                .then(() => {
                  this.transitionTo('blogs');
                });
          });
    }
  }
});
