import AuthenticatedRoute from '../authenticated-route';
import Ember from 'ember';

export default AuthenticatedRoute.extend({
  model(params) {
    return this.store.findRecord('blog', params.blog_id);
  }

});
