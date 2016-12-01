import DS from 'ember-data';
import Ember from 'ember';
import moment from 'moment';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  created: DS.attr(
    'date', {
      defaultValue() {
        return new Date();
      }
    }
  ),

  user: DS.belongsTo('user', { async: false }),
  blog: DS.belongsTo('blog', { async: false }),
  comments: DS.hasMany('comment'),

  isValid: Ember.computed.notEmpty('body'),
  dateOfCreation: Ember.computed(
    'created',
    function () {
      return moment(this.get('created')).format("DD.MM.YYYY, HH:mm:ss");
    }
  )
});
