import AuthenticatedRoute from '../../athenticated-route/route';

export default AuthenticatedRoute.extend({
  model(params) {
    return this.store.findRecord('blog', params.blog_id);
  }

});
