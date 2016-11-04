import DS from 'ember-data';
import Ember from 'ember';
import moment from 'moment';

export default DS.Model.extend({
  email: DS.attr('string'),
  password: DS.attr('string'),
  registrationDate: DS.attr('date', {
    defaultValue() {
      return new Date();
    }
  }),

  login: DS.attr('date'),

  blogs: DS.hasMany('blog'),
  posts: DS.hasMany('post'),
  comments: DS.hasMany('comment'),
  isValid: Ember.computed.notEmpty('body'),


  registration: Ember.computed(function () {
    return moment(this.get('registrationDate')).format("DD-MM-YYYY")
  }),

  lastLogin: Ember.computed('login', function () {
    return moment(this.get('login')).format("DD-MM-YYYY, HH:mm:ss")
  })
});