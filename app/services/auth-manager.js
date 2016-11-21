import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),
  currentUser: Ember.Object.create(),
  currentPermissions: undefined,

  isAuthenticated: Ember.computed('currentUser.id', function () {
    return !!this.get('currentUser.id');
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
  },

  initializeUserPermissions(user) {
    const ds = this;
    return new Promise (function (resolve) {
        user.get('role.permissions').then((permissions) => {
          ds.set('currentPermissions', permissions);
          ds.set('cipher', permissions);
          resolve();
        });
    });
  },

  initializeCurrentUser(user) {
    this.setCurrentUser(user);
    this.lastLogin(user);
    return this.initializeUserPermissions(user);
  }

});
