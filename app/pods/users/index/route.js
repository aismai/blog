import AuthenticatedRoute from '../../../routes/authenticated-route';

export default AuthenticatedRoute.extend({
  model() {
    return this.store.findAll('user');
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
