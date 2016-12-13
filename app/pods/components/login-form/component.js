import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    login(userParams) {
      const { email, password } = this.getProperties('email', 'password');
      this.get('authService').findUser(email, password).then((user) => {
        if (user){
          this.get('authService').initializeCurrentUser(user).then(() => {
            this.sendAction('action', userParams);
          });
        }
      });
    }
  }
});
