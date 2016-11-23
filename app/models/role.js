import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  permissions: DS.hasMany('permission', {async: true}),
});
