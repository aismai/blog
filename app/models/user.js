import DS from 'ember-data';
import Ember from 'ember';
import moment from 'moment';

export default DS.Model.extend({
  email: DS.attr('string'),
  password: DS.attr('string'),
  registration: DS.attr('date', {
    defaultValue() {
      return new Date();
    }
  }),

  login: DS.attr('date'),
  role: DS.belongsTo('role'),
  blogs: DS.hasMany('blog'),
  posts: DS.hasMany('post'),
  comments: DS.hasMany('comment'),
  isValid: Ember.computed.notEmpty('body'),

  // ready() {
  //   if (!!this.get('roles.permissions')) {
  //     return;
  //   }
  //
  //   let defaultRole = this.store.createRecord('role', {
  //     name: 'User',
  //     permissions: []
  //   });
  //   this.set('role', defaultRole);
  //
  //   let canCreateBlogs = this.store.createRecord('permission', {
  //     name: 'Can Create Blogs',
  //     code: 'canCreateBlogs',
  //   });
  //   this.get('roles.permissions').pushObject(canCreateBlogs);
  // },

  registrationDate: Ember.computed(function () {
    return moment(this.get('registration')).format("DD.MM.YYYY");
  }),

  lastLogin: Ember.computed('login', function () {
    return moment(this.get('login')).format("DD.MM.YYYY, HH:mm:ss");
  })
});