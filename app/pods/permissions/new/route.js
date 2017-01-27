import AuthenticatedRoute from '../../athenticated-route/route';

export default AuthenticatedRoute.extend({
  model() {
    return this.store.createRecord('permission');
  },

  actions: {
    save(permission) {
      permission.save()
                .then(() => {
                  this.transitionTo('roles');
                });
    }
  }
});
