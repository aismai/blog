import AuthenticatedRoute from '../../athenticated-route/route';

export default AuthenticatedRoute.extend({
  init() {
    this._super(...arguments);
  },

  resetController(controller, isExiting) {
    if (isExiting) {
      controller.set('user', null);
    }
  }

});
