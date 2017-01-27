import Ember from 'ember';

export default Ember.Service.extend({
  store:              Ember.inject.service(),
  currentUser:        Ember.Object.create(),
  currentPermissions: [],

  isAuthenticated: Ember.computed('currentUser.id',
    function () {
      return !!this.get('currentUser.id');
    }
  ),

  isAdmin: Ember.computed('currentUser.role.name',
    function () {
      return this.get('currentUser.role.name') == 'admin';
    }
  ),

  setLastLoginDate(user) {
    user.set('login', new Date());
    return user.save();
  },

  findUser(email, pass){
    return this.get('store')
               .query('user', {email: email, password: pass})
               .then(function (users) {
                 return users.get("firstObject");
               });
  },

  setCurrentUser(user){
    this.set('currentUser', user);
  },

  initializeUserPermissions(user) {
    const _this = this;
    return new Promise(function (resolve) {
      if (user.get('role.permissions.length')) {
        user.get('role.permissions')
            .then((permissions) => {
              _this.set('currentPermissions', permissions);
              resolve();
            });
      }
      resolve();
    });
  },

  initializeCurrentUser(user) {
    this.setCurrentUser(user);
    return this.setLastLoginDate(user)
               .then(() => {
                 return this.initializeUserPermissions(user);
               });
  }

});
