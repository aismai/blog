import Ember from 'ember';

export default Ember.Service.extend({
  blockView: true,

  toggleView() {
    this.toggleProperty('blockView');
  }
});
