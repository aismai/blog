import Ember from 'ember';

export default Ember.Service.extend({
  store:              Ember.inject.service('store'),
  authService:        Ember.inject.service('auth-service'),
  activities:         undefined,
  filteredActivities: undefined,

  init() {
    this._super(...arguments);
    this.get('store')
        .findAll('activity')
        .then((activities) => {
            this.set('activities', activities);
            this.set('filteredActivities', activities);
          }
        );
  },
  //todo: remove flash message popup, when new activity created
  createActivity(type, activityObject) {
    const activityObjectName = activityObject.constructor.modelName.capitalize();
    const objectModel        = {
      type:  activityObjectName,
      id:    activityObject.get('id'),
      title: activityObject.get('name')
    };

    const newActivity = this.get('store')
                            .createRecord('activity', {
                                type:      type,
                                user:      this.get('authService.currentUser'),
                                typeModel: objectModel
                              }
                            );
    // { adapterOptions: { flashMessage: false } - not working...
    newActivity.save({adapterOptions: {flashMessage: false}});
  },

  setActivities(filteredActivities) {
    this.set('filteredActivities', filteredActivities);
  }
});
