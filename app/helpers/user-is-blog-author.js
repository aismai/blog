import Ember from 'ember';

export default Ember.Helper.extend({

  //TODO: use [param1, param2, ...] instead of params in all helpers. Rename this helper
  //before user-is-author
  compute(blogId) {
    return this.get('authManager.currentUser.blogs').filter((blog) => {
      return (blog.get('id') === blogId.get('firstObject'));
    });
  }
});
