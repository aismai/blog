import Ember from 'ember';

export default Ember.Component.extend({
  role: undefined,
  store: Ember.inject.service(),
  permissions: Ember.computed(function () {
    return this.get('store').findAll('permission');
  }),

  init() {
    this._super(...arguments);
    const newRole = this.get('store').createRecord('role');
    this.set('role', newRole);
  },

  willDestroyElement() {
    this.get('role').rollbackAttributes();
  },

  actions: {
    addPermission(ignore, permissions){
      const selected = this.set('permission', permissions);
      this.set('role.permissions', selected);
    },
    buttonClicked(role) {
      this.sendAction('action', role);
    }
  }

});
