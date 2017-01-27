import AuthenticatedRoute from '../../athenticated-route/route';


export default AuthenticatedRoute.extend({
  model () {
    return this.store.findAll('permission');
  },

  actions: {
    deletePermission(permission) {
      const promiseRoles = this.store.findAll('role');
      promiseRoles.then((roles) => {
        roles.forEach((role) => {
          role.get('permissions')
              .removeObject(permission);
          role.save();
        });
        permission.destroyRecord();
      });
    }
  }
});
