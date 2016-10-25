import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),
  currentUser: Ember.Object.create(),
  isAuthenticated: false,

  checkUser(email, pass){
    this.get('store').findAll('user').then((users) =>{
      users.forEach((user) => {
        if((Ember.get(user, 'email') === email) && ( Ember.get(user, 'password') === pass)) {
          console.log('Found User in Storage');
          console.log(this.get('currentUser'));
          this.set('currentUser', user);
          this.set('isAuthenticated', true);
        }
      });
    });
  }
});
