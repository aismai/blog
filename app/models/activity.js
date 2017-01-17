import DS from 'ember-data';
import Ember from 'ember';
import moment from 'moment';

export default DS.Model.extend({
  type:    DS.attr('string'),
  user:    DS.belongsTo('user'),
  typeModel: DS.attr(),
  created: DS.attr(
    'date', {
      defaultValue() {
        return new Date();
      }
    }
  ),

  createdFormatted: Ember.computed(
    'created',
    function () {
      return moment(this.get('created'))
        .format("DD.MM.YYYY, HH:mm:ss");
    }
  )
});
