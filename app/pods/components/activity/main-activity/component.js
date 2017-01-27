import Ember from 'ember';

export default Ember.Component.extend({
  store:      Ember.inject.service('store'),
  activities: undefined,
  loading:    true,

  init() {
    this._super(...arguments);
    const activities = this.get('store')
                           .findAll('activity');
    this.set('activities', activities);
  },

  actions: {
    filterActivities(filteredActivities) {
      this.set('activities', filteredActivities);
    }
  }

});
