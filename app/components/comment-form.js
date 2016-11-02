import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    buttonClicked(commentParams) {
      this.sendAction('action', commentParams);
    }
  }
});
