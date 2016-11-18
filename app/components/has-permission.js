import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  permission: undefined,
  hasPermission: Ember.computed('authManager.currentPermissions', 'permission', function () {
    return this.get('authManager.currentPermissions').filter((permission) => {
      return permission.get('code') === this.get('permission');
    });
  }),

  init() {
    this._super(...arguments);
    this.set('permission', this.get('permissionCode'));
  },
  actions: {
  }
});
