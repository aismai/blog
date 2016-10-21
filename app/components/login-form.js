import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    authenticate() {
      console.log('+- login-form authenticate');
      const { email, password } = this.getProperties('email', 'password');
      this.get('authManager').checkUser(email, password);
      this.sendAction();
    }
  }
});
