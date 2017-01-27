import Ember from 'ember';
import objectFields from '../const/activityFields';

export default Ember.Service.extend({
  store:              Ember.inject.service('store'),
  authService:        Ember.inject.service('auth-service'),
  activities:         undefined,
  filteredActivities: undefined,

  init() {
    this._super(...arguments);
  },


  createActivity(type, activityObject) {
    const activityObjectName = activityObject.constructor.modelName;
    // console.log(activityObjectName);
    // console.log((objectFields[activityObject.constructor.modelName]));

    // return;
    const objectModel        = {
      type:  activityObjectName.capitalize(),
      id:    activityObject.get('id'),
      title: activityObject.get(objectFields[activityObjectName])
    };

    const newActivity = this.get('store')
                            .createRecord('activity', {
                                type:      type,
                                user:      this.get('authService.currentUser'),
                                typeModel: objectModel
                              }
                            );
    //todo: remove flash message popup, when new activity created
    // { adapterOptions: { flashMessage: false } - is not working...
    newActivity.save({adapterOptions: {flashMessage: false}});
  }
});
