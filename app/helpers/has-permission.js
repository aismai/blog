import Ember from 'ember';

export default Ember.Helper.extend({
  compute(params) {
      return this.get('authManager.currentPermissions').find((permission) =>{
        return permission.get('code') === params.get('firstObject');
      });
  }
});