import AuthenticatedRoute from '../../athenticated-route/route';

export default AuthenticatedRoute.extend({
  model() {
    return this.store.findAll('blog-type');
  }
});
