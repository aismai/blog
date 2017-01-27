import AuthenticatedRoute from '../../athenticated-route/route';

export default AuthenticatedRoute.extend({
  model() {
    return this.store.findAll('role');
  },

  actions: {
    deleteRole(role) {
      const usersPromise = this.store.findAll('user');
      console.log(role.get('id'));
      usersPromise.then((users) => {
        users.forEach((user) => {
          console.log(user.get('email'));
          if (user.get('role.id')
                  .includes(role.get('id'))) {
            user.set('role', null);
            user.save();
          }
        });
        role.destroyRecord();
      });

    }
  }
});
