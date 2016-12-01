import Ember from 'ember';

export default Ember.Route.extend({
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
