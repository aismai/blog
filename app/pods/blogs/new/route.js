import AuthenticatedRoute from '../../athenticated-route/route';
import Ember from 'ember';

export default AuthenticatedRoute.extend({

  blogService: Ember.inject.service('blog-service'),
  activityService: Ember.inject.service('activity-service'),

  actions: {
    save(blog) {
      this.get('blogService')
          .saveBlog(blog);
      this.get('activityService').createActivity('blog-create', blog);
    }
  }
});
