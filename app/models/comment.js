import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  body: DS.attr('string'),

  user: DS.belongsTo('user'),
  post: DS.belongsTo('post', { async: false }),

  isValid: Ember.computed.notEmpty('body'),
  isAuthor: Ember.computed('user.id', function () {
    return (this.get('user.id') !== this.get('authManager.currentUser.id'))? false : true;
  })
});
