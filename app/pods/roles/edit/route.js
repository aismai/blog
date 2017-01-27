import AuthenticatedRoute from '../../athenticated-route/route';

export default AuthenticatedRoute.extend({
  model(params) {
    return this.store.findRecord('role', params.role_id);
  },

  actions: {
    save(role) {
      role.save()
          .then(() => {
            this.transitionTo('roles');
          });
    },

    willTransition(transition) {
      let model = this.controller.get('model');
      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");
        if (confirmation) {
          model.unloadRecord();
        } else {
          transition.abort();
        }
      }
    }
  }
});
