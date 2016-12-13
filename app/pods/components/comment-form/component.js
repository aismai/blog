import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save(commentParams) {
      this.sendAction('action', commentParams);
    }
  }
});
