import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('role');
  },

  actions: {
    deleteRole(role) {
      const usersPromise = this.store.findAll('user');
      usersPromise.then((users) => {
        users.forEach((user) => {
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
