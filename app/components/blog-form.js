import Ember from 'ember';

export default Ember.Component.extend({

  actions: {

    //TODO: rename 'param' in all components
    buttonClicked(param) {
      this.sendAction('action', param);
    }
  }
});
