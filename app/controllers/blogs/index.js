import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['user'],
  user: null,

  filteredBlogs: Ember.computed('user', 'model', function () {
    let user = this.get('user');
    let blogs = this.get('model');
    if (user) {
      return blogs.filterBy('user.id', user);
    } else {
      return blogs;
    }
  })
});
