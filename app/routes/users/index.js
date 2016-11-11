import AuthenticatedRoute from '../authenticated-route';

export default AuthenticatedRoute.extend({
  model() {
    const usersPromise = this.store.findAll('user');
    usersPromise.then(() => {
      if(this.get('authManager.currentUser.role.name') != 'Admin') {
        this.transitionTo('blogs');
      }
    });

    return usersPromise;
  },

  actions: {
    deleteUser(user) {
      console.log('route: deleteUser action');
      let confirmation = confirm('Are you sure?');
      if (confirmation) {
        user.destroyRecord();
      }
    }
  }
});
