import DS from 'ember-data';
import moment from 'moment';

export default DS.Model.extend({
  type:    DS.attr('string'),
  user:    DS.belongsTo('user'),
  // ob: DS.attr(),
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
