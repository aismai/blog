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

  actions: {
    addPermission(permission){
      this.get('role').get('permissions').pushObject(this.set('permission', permission));
    },
    buttonClicked(role) {
      this.sendAction('action', role);
    }
  }

});
