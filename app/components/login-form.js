import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    authenticate() {
      console.log('+- login-form authenticate');
      const { email, password } = this.getProperties('email', 'password');

      //TODO: use promise from 'checkUser' method
      this.get('authManager').checkUser(email, password);

      //TODO: specify action to send
      this.sendAction();

    }
  }
});
