import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    buttonClicked(postParams){
      this.sendAction('action', postParams);
    }
  }
});
