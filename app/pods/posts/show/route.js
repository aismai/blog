import AuthenticatedRoute from '../../athenticated-route/route';

export default AuthenticatedRoute.extend({
  model(params){
    return this.store.findRecord('post', params.post_id);
  }
});
