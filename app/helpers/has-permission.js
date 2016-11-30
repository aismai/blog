import Ember from 'ember';

export default Ember.Helper.extend({
  hasPermission: false,
  compute(permissionParams) {
    //TODO: refactor. Use params.forEach instead of for, use findBy instead of find
    //!
    permissionParams.forEach((permission) => {
      if(this.get('authManager.currentPermissions').findBy('code', permission)){
        this.set('hasPermission', true);
      }
    });
    return this.get('hasPermission');
  }
});
