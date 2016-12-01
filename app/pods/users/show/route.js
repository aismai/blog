import AuthenticatedRoute from '../../../routes/authenticated-route';

export default AuthenticatedRoute.extend({
  model(user) {
    return this.store.findRecord('user', user.user_id);
  }
});
