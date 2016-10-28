import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),

  user: DS.belongsTo('user'),
  blog: DS.belongsTo('blog', { async: false }),
  comments: DS.hasMany('comment'),

  isValid: Ember.computed.notEmpty('body')
});
