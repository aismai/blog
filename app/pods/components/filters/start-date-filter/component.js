import Ember from 'ember';
import BaseFilter from '../base-filter/component';

export default BaseFilter.extend({
  tagName:       '',
  filterService: Ember.inject.service('filter-service'),

  run() {
    const startDate = this.get('filterValue');
    if (startDate) {
      const filteredBlogs = this.get('filterService.filteredBlogs')
                                .filter((blog) => {
                                  return blog.get('created') >= startDate;
                                });
      this.get('filterService')
          .setBlogs(filteredBlogs);
    }
  }
});
