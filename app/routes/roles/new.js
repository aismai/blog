import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    save(role) {
      role.save()
          .then(() => {
            this.transitionTo('roles');
          });
    }
  }

});
