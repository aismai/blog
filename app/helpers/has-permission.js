import Ember from 'ember';

export function hasPermission(params, { permissionCode, permissions }) {
  const result = permissions.find((permission) => {
    return permission.get('code') === permissionCode;
  });
  if (result) {
    return result.get('code');
  } else {
    return '';
  }

}

export default Ember.Helper.helper(hasPermission);
