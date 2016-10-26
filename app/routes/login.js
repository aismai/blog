import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    authenticate() {
      console.log('+- in login route');
      this.transitionTo('blogs');
    }
  }
});
