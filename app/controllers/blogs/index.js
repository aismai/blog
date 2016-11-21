import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['sortBy'],
  sortBy: null,

  filteredBlogs: Ember.computed('sortBy', 'model', function () {
    let user = this.get('sortBy');
    let blogs = this.get('model');
    if (user) {
      return blogs.filterBy('user.id', user);
    } else {
      return blogs;
    }
  })
});
