import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),

  blog: DS.belongsTo('blog', {async: false}),
  comments: DS.hasMany('comment')
});
