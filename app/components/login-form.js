import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    buttonClicked(userParams) {
      const { email, password } = this.getProperties('email', 'password');
      this.get('authManager').findUser(email, password).then((user) => {
        if (user){
          this.get('authManager').setCurrentUser(user);
          this.get('authManager').lastLogin(user);
        }
      });
      this.sendAction('action', userParams);
    }
  }
});
