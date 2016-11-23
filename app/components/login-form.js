import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    //TODO: rename action
    //renamed buttonClicked to login
    login(userParams) {
      const { email, password } = this.getProperties('email', 'password');
      this.get('authManager').findUser(email, password).then((user) => {
        if (user){
          this.get('authManager').initializeCurrentUser(user).then(() => {
            this.sendAction('action', userParams);
          });
        }
      });
    }
  }
});
