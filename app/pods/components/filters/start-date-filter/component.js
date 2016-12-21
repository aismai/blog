import Ember from 'ember';
import BaseFilter from '../base-filter/component';

export default BaseFilter.extend({
  tagName:       '',
  filterService: Ember.inject.service('filter-service'),
  startDate: undefined,
  endDate: undefined,

  run() {
    const date =  this.get('filterValue');
    const filteredBlogs = this.get('filterService.filteredBlogs')
                              .filter((blog) => {
                                return blog.get('created') >= date;
                              });
    this.get('filterService')
        .setBlogs(filteredBlogs);
  },

  actions: {
    setStartDate(value) {
      this.set('startDate', value);
    },

    setEndDate(value) {
      this.set('endDate', value);

    }
  }
});
