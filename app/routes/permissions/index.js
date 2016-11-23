import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.store.findAll('permission');
  },

  actions: {
    deletePermission(permission) {
      const promiseRoles = this.store.findAll('role');
      promiseRoles.then((roles) => {
        roles.forEach((role) => {
          role.get('permissions').removeObject(permission);
          role.save();
        });
        permission.destroyRecord();
      });
    }
  }
});
