import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    authenticate() {
      this.transitionTo('blogs');
    }
  }
});
