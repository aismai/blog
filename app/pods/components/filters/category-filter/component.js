import Ember from 'ember';
import BaseFilter from '../base-filter/component';

export default BaseFilter.extend({
  tagName:       '',
  store:         Ember.inject.service(),
  filterService: Ember.inject.service('filter-service'),

  categories: Ember.computed(
    function () {
      return this.get('store')
                 .findAll('blog-type');
    }
  ),

  run() {
    const category = this.get('filterValue');
    if (category) {
      const filteredBlogs = this.get('filterService.filteredBlogs')
                                     .filter((blog) => {
                                       return blog.get('blogType.name') === category.get('name');
                                     });
      this.get('filterService')
          .setBlogs(filteredBlogs);
    }
  }
});
