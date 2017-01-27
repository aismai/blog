import AuthenticatedRoute from '../../athenticated-route/route';


export default AuthenticatedRoute.extend({
  model (params) {
    return this.store.findRecord('permission', params.permission_id);
  },

  actions: {
    save(permission) {
      permission.save()
                .then(() => {
                  this.transitionTo('permissions');
                });
    }
  }
});
