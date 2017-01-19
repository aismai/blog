import Ember from 'ember';

export default Ember.Helper.extend({
  hasPermission: false,
  compute(permissionParams) {
    permissionParams.forEach((permission) => {
      if (this.get('authService.currentPermissions')
              .findBy('code', permission)) {
        this.set('hasPermission', true);
      }
    });
    return this.get('hasPermission');
  }
});
