import AuthenticatedRoute from '../../athenticated-route/route';
import Ember from 'ember';

export default AuthenticatedRoute.extend({
  activityService: Ember.inject.service('activity-service'),
  hasPermission: Ember.computed(
    'authService.currentPermissions',
    function () {
      return !!this.get('authService.currentPermissions')
        .find((permission) => {
          return permission.get('code') === 'canEditAllBlogs';
        });
    }),

  model(params){
    const blogPromise = this.store.findRecord('blog', params.blog_id);
    blogPromise.then((blog) => {
      if (!this.get('hasPermission')) {
        if (!blog.get('isAuthor')) {
          this.transitionTo('blogs');
        }
      }
    });
    return blogPromise;
  },

  actions: {
    save(blog) {
      blog.save({ adapterOptions: { flashMessage: true } })
        .then(() => {
          this.get('activityService').createActivity('blog-edit', blog);
          this.transitionTo('blogs');
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
