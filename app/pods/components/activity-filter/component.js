import Ember from 'ember';
import activityFilterTypes from '../../../const/activityFilterTypes';

export default Ember.Component.extend({

  activityService:  Ember.inject.service('activity-service'),
  currentFilters:    [],

  filters: Ember.computed(
    function () {
      return activityFilterTypes;
    }
  ),

  init() {
    this._super(...arguments);
    // this.runFilter();
  },

  runFilter() {
    const filteredActivities = this.get('activityService.activities')
        .filter((activity) => {
           return this.get('currentFilters').includes(activity.get('type'));
          }
        );
    console.log(filteredActivities);
    this.get('activityService').setActivities(filteredActivities);
  },

  actions: {
    toggleFilter(filter) {
      Ember.set(filter, 'isActive', !filter.isActive);
      if (filter.isActive) {
        this.get('currentFilters')
            .pushObjects(filter.types);
      } else {
        this.get('currentFilters')
            .removeObjects(filter.types);
      }
      this.runFilter();
    }
  }
});
