import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  posts: DS.hasMany('post'),
  user: DS.belongsTo('user'),

  isValid: Ember.computed.notEmpty('name')
});
