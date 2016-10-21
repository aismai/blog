import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    if (!this.get('authManager.isAuthenticated')){
      this.transitionTo('login');
    }
  }
});
