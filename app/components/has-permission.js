import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  permission: undefined,
  hasPermission: Ember.computed('authManager.currentPermissions', 'permission', function () {
    //TODO: what will be if there are no 'currentPermissions'?
    //currentPermissions now equals to empty array
      return this.get('authManager.currentPermissions').filter((permission) => {
        return permission.get('code') === this.get('permission');
      });
  }),

  init() {
    this._super(...arguments);
    this.set('permission', this.get('permissionCode'));
  },

});
