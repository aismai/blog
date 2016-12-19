import BaseFilter from '../base-filter/component';

export default BaseFilter.extend({
  tagName:       '',
  store:         Ember.inject.service(),
  filterService: Ember.inject.service('filter-service'),
  users:         Ember.computed(
    function () {
      return this.get('store')
                 .findAll('user');
    }
  ),

  run() {
    const user = this.get('filterValue');
    if (user) {
      const filteredUsers = this.get('filterService.filteredBlogs')
                                .filter((blog) => {
                                  return blog.get('user.email') === user.get('email');
                                });
      this.get('filterService')
          .setBlogs(filteredUsers);
    }
  }
});
