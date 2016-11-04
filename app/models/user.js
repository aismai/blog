import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  email: DS.attr('string'),
  password: DS.attr('string'),
  registrationDate: DS.attr('date'),
  lastLogin: DS.attr('date'),

  blogs: DS.hasMany('blog'),
  posts: DS.hasMany('post'),
  comments: DS.hasMany('comment'),
  isValid: Ember.computed.notEmpty('body'),
});
