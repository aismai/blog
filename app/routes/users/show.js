import Ember from 'ember';

export default Ember.Route.extend({
  model(user) {
    return this.store.findRecord('user', user.user_id);
  }
});
