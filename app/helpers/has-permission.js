import Ember from 'ember';

export default Ember.Helper.extend({
  compute(params) {
    for (let i =0; i < params.length; i++) {
      if (this.get('authManager.currentPermissions').find((permission) => {
          return permission.get('code').includes(params[i]);
        })) return true;
    }
  }
});