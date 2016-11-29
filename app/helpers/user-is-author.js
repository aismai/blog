import Ember from 'ember';

export default Ember.Helper.extend({

  //TODO: use [param1, param2, ...] instead of params in all helpers. Rename this helper
  compute(params) {
    return this.get('authManager.currentUser.blogs').filter((blog) => {
      return (blog.get('id') === params.get('firstObject'));
    });
  }
});
