import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr('string'),
  user: DS.belongsTo('user')
  // ob: DS.attr()
});
