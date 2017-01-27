import Ember from 'ember';

export default Ember.Helper.extend({
  authService: Ember.inject.service('auth-service'),

  compute(blogId) {
    return this.get('authService.currentUser.blogs').filter((blog) => {
      return (blog.get('id') === blogId.get('firstObject'));
    });
  }
});
