export function initialize(application) {
  application.inject('route', 'authManager', 'service:auth-manager');
  application.inject('component', 'authManager', 'service:auth-manager');
  application.inject('controller', 'authManager', 'service:auth-manager');
  application.inject('model', 'authManager', 'service:auth-manager');
}

export default {
  name: 'current-user',
  initialize: initialize
};