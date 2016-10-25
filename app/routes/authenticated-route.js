import Ember from 'ember';

export default Ember.Route.extend({
  redirect() {
    if (!this.get('authManager.isAuthenticated')){
      this.transitionTo('login');
    }
  }
});
