import DS from 'ember-data';
import Ember from 'ember';


export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),

  posts: DS.hasMany('post'),
  user: DS.belongsTo('user'),

  isValid: Ember.computed.notEmpty('name'),

  //TODO: refactor
  // currentUser: Ember.computed(function () {
  //   return this.get('authManager.currentUser.id');
  // }),
  //
  // isAuthor: Ember.computed.equal('user.id', 'currentUser')


  isAuthor: Ember.computed('user.id', function () {
    return (this.get('user.id') !== this.get('authManager.currentUser.id'))? false : true;
  })

});
