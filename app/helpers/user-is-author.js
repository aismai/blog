import Ember from 'ember';

export default Ember.Helper.extend({
  compute(params) {
    return this.get('authManager.currentUser.blogs').filter((blog) => {
      return (blog.get('id') === params.get('firstObject'));
    });
  }
});