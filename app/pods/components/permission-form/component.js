import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save(permission){
      this.sendAction('action', permission);
    }
  }
});
