import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),
  currentUser: Ember.Object.create(),
  isAuthenticated: false,

  findUser(email, pass){
    return this.get('store').query('user', {  email: email, password: pass })
      .then(function(users) {
      return users.get("firstObject");
    });
  },

  setCurrentUser(user){
    this.set('currentUser', user);
    this.set('isAuthenticated', true);
  }

});
