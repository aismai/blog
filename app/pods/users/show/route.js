import AuthenticatedRoute from '../../athenticated-route/route';
import Ember from 'ember';

export default AuthenticatedRoute.extend({
  authService: Ember.inject.service('auth-service'),

  model(user) {
    return this.store.findRecord('user', user.user_id);
  }
});
