import DS from 'ember-data';
import Ember from 'ember';
import moment from 'moment';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  cover: DS.attr(
    'string',
    {
      defaultValue() {
        return '/assets/images/sanctum_sanctorum.jpg';
      }
    }
  ),

  created: DS.attr(
    'date', {
      defaultValue() {
        return new Date();
      }
    }
  ),

  posts: DS.hasMany('post'),
  user: DS.belongsTo('user'),
  blogType: DS.belongsTo('blog-type'),

  isValid: Ember.computed.notEmpty('name'),
  isAuthor: Ember.computed(
    'user.id',
    function () {
      return (this.get('user.id') === this.get('authService.currentUser.id'));
    }
  ),
  dateOfCreation: Ember.computed(
    'created',
    function () {
      return moment(this.get('created')).format("DD.MM.YYYY, HH:mm:ss");
    }
  )
});
