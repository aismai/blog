import DS from 'ember-data';
import Ember from 'ember';


export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),

  posts: DS.hasMany('post'),
  user: DS.belongsTo('user'),
  blogType: DS.belongsTo('blog-type'),

  isValid: Ember.computed.notEmpty('name'),

  isAuthor: Ember.computed('user.id', function () {
    return (this.get('user.id') === this.get('authManager.currentUser.id'));
  })
});
