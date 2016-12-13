import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    if (!this.get('authService.isAuthenticated')) {
      this.transitionTo('login');
    }
  }
});
