import Ember from 'ember';

export default Ember.Component.extend({
  gridService: Ember.inject.service('grid-service'),
  tagName:     '',
  blogsArray: [1, 2, 3],

  init() {
    this._super(...arguments);
  },

  actions: {
    setView() {
      this.get('gridService')
          .toggleView();
    },

    toggleMultipleDeletion() {
      this.get('gridService')
          .toggleDeleteAction();
      console.log(this.get('gridService.deleteMultiple'));
    }
  }

});
