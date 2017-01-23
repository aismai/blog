import Ember from 'ember';
import activityFilterTypes from '../../../const/activityFilterTypes';

export default Ember.Component.extend({

  activityService: Ember.inject.service('activity-service'),
  currentFilters:  [],
  activities:      undefined,

  filters: Ember.computed(
    function () {
      return activityFilterTypes;
    }
  ),

  init() {
    this._super(...arguments);
    this.get('mainFilterActivities')
        .then((activitiesPromise) => {
            this.set('activities', activitiesPromise);
            this.setCurrentFilters();
            this.runFilter();
          }
        );
  },

  setCurrentFilters() {
    this.get('filters')
        .forEach((filter) => {
            if (filter.isActive) this.get('currentFilters')
                                     .pushObjects(filter.types);
          }
        );
  },

  runFilter() {
    const filteredActivities = this.get('activities')
                                   .filter((activity) => {
                                       return this.get('currentFilters')
                                                  .includes(activity.get('type'));
                                     }
                                   );
    this.sendAction('filteredActivities', filteredActivities);
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
