import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    authenticate() {
      console.log('+- login-form authenticate');
      const { email, password } = this.getProperties('email', 'password');
      // this.get('authManager').findUser(email, password);
      //TODO: use promise from 'findUser' method
      this.get('authManager').findUser(email, password).then((user) => {
        if (user){
          this.get('authManager').setCurrentUser(user)
        }
      });
      this.sendAction('login');
    }
  }
});
