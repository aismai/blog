import Ember from 'ember';

export default Ember.Service.extend({
  store:       Ember.inject.service('store'),
  authService: Ember.inject.service('auth-service'),
  activities:  undefined,

  init() {
    this._super(...arguments);
    const activities = this.get('store')
                           .findAll('activity');
    this.set('activities', activities);
  },
  //todo: remove flash message, when new activity created
  createActivity(type, activityObject) {
    const activityObjectName = activityObject.constructor.modelName.capitalize();
    const objectModel        = {
      type:  activityObjectName,
      id:    activityObject.get('id'),
      title: activityObject.get('name')
    };

    const newActivity        = this.get('store')
                                   .createRecord('activity', {
                                       type:      type,
                                       user:      this.get('authService.currentUser'),
                                       typeModel: objectModel
                                     }
                                   );
    // { adapterOptions: { flashMessage: false } - not working...
    newActivity.save({ adapterOptions: { flashMessage: false } });
  }
});
