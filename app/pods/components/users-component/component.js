import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  roles: Ember.computed(function () {
    return this.get('store').findAll('role');
  }),

  actions: {
    setUserRole(user, ignore, role) {
      const selected = this.set('role', role);
      user.set('role', selected);
      user.save();
    },
    deleteUser(userParams) {
      this.sendAction('action', userParams);
    }
  }
});
