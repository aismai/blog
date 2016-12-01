import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('role', params.role_id);
  }
});
