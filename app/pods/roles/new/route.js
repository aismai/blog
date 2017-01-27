import AuthenticatedRoute from '../../athenticated-route/route';


export default AuthenticatedRoute.extend({

  actions: {
    save(role) {
      role.save()
          .then(() => {
            this.transitionTo('roles');
          });
    }
  }

});
