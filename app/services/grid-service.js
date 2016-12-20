import Ember from 'ember';

export default Ember.Service.extend({
  blockView: true,
  deleteMultiple: false,

  toggleView() {
    this.toggleProperty('blockView');
  },

  toggleDeleteAction() {
    this.toggleProperty('deleteMultiple');
  }


});
