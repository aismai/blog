import Ember from 'ember';

export default Ember.Service.extend({
  store:       Ember.inject.service('store'),
  authService: Ember.inject.service('auth-service'),

  createActivity(type) {
    const newActivity = this.get('store').createRecord('activity', {
        type: type,
        user: this.get('authService.currentUser')
      }
    );
    newActivity.save();
  }
});
