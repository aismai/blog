import DS from 'ember-data';
import Ember from 'ember';
import moment from 'moment';

export default DS.Model.extend({
  body: DS.attr('string'),

  user: DS.belongsTo('user', { async: false }),
  post: DS.belongsTo('post', { async: false }),

  isValid: Ember.computed.notEmpty('body'),

  created: DS.attr(
    'date', {
      defaultValue() {
        return new Date();
      }
    }
  ),
  isAuthor: Ember.computed(
    'user.id',
    function () {
      return (this.get('user.id') === this.get('authManager.currentUser.id'));
    }
  ),
  dateOfCreation: Ember.computed(
    'created',
    function () {
      return moment(this.get('created')).format("DD.MM.YYYY, HH:mm:ss");
    }
  )
});
