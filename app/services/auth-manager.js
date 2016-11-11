import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),
  currentUser: Ember.Object.create(),

  isAuthenticated: Ember.computed('currentUser.id', function () {
    return !!this.get('currentUser.id');
  }),

  isAdmin: Ember.computed('currentUser.role.name', function () {
    return (this.get('currentUser.role.name') === 'Admin');
  }),

  lastLogin(user) {
    user.set('login', new Date());
    user.save();
  },

  findUser(email, pass){
    return this.get('store').query('user', {  email: email, password: pass })
      .then(function(users) {
      return users.get("firstObject");
    });
  },

  setCurrentUser(user){
    this.set('currentUser', user);
  }

});
