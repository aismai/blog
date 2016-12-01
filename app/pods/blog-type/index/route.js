import AuthenticatedRoute from '../../../routes/authenticated-route';

export default AuthenticatedRoute.extend({
  model() {
    return this.store.findAll('blog-type');
  }
});
