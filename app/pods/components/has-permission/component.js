import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  permission: undefined,
  hasPermission: Ember.computed('authService.currentPermissions', 'permission', function () {
      return this.get('authService.currentPermissions').filter((permission) => {
        return permission.get('code') === this.get('permission');
      });
  }),

  init() {
    this._super(...arguments);
    this.set('permission', this.get('permissionCode'));
  },

});
