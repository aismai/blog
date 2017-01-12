import Ember from 'ember';

export default Ember.Component.extend({
  activityType: Ember.computed('item',
    function () {
      return `activity/${this.get('item.type')}`;
    }
  )
});
