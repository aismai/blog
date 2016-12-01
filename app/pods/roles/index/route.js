import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('role');
  },

  actions: {
    deleteRole(role) {
      // TODO: if user has no roles? .includes throws error
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
