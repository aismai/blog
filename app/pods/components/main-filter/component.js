import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  filterService: Ember.inject.service('filter-service'),
  registeredFilters: [],

  actions: {
    registerFilter(filter) {
      this.get('registeredFilters')
          .pushObject(filter);
    },

    runFilters() {
      this.get('filterService').setBlogs(this.get('filterService.blogs'));
      this.get('registeredFilters')
          .forEach((filter) => {
            filter.run();
            }
          );
    },
  }
});
