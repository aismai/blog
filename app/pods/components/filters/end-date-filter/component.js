import Ember from 'ember';
import BaseFilter from '../base-filter/component';

export default BaseFilter.extend({
  tagName:       '',
  filterService: Ember.inject.service('filter-service'),

  run() {
    const endDate = this.get('filterValue') ? this.get('filterValue') : Infinity;
    const filteredBlogs = this.get('filterService.filteredBlogs')
                              .filter((blog) => {
                                return blog.get('created') <= endDate;

                              });
    this.get('filterService')
        .setBlogs(filteredBlogs);
  }
});
