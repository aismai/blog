import Ember from 'ember';

export default Ember.Component.extend({

  filterObs: Ember.observer('filterValue', function () {
    this.sendAction('runFilter');
  }),

  init()  {
    this._super(...arguments);
    this.sendAction('register', this);
  },

  actions: {
    filter(value) {
      this.set('filterValue', value);
    }
  }
});
