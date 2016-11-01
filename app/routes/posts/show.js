import AuthenticatedRoute from '../authenticated-route';

export default AuthenticatedRoute.extend({
  model(params){
    return this.store.findRecord('post', params.post_id);
  }
});
