import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('role');
  },

  actions: {
    deleteRole(role) {
      let confirmation = confirm('Are you sure?');
      if (confirmation) {
          role.destroyRecord();
      }
    }
  }
});
