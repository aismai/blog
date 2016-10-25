import Ember from 'ember';

const {
  get,
  set
} = Ember;

export default Ember.Service.extend({
  store: Ember.inject.service(),
  user: Ember.Object.create(),
  currentUser: {},

  isAuthenticated: false,

  checkUser(email, pass){
    this.get('store').findAll('user').then((users) =>{
      users.forEach((obj) => {
        if((Ember.get(obj, 'email') === email) && ( Ember.get(obj, 'password') === pass)) {
          set(this, 'currentUser', obj);
          console.log('Found User in Storage');
          set(this, 'isAuthenticated', true);
        }
      });
    });
  }

});
