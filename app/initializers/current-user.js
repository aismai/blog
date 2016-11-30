export function initialize(application) {
  application.inject('route', 'authManager', 'service:auth-manager');
  application.inject('component', 'authManager', 'service:auth-manager');
  application.inject('controller', 'authManager', 'service:auth-manager');
  application.inject('model', 'authManager', 'service:auth-manager');
  application.inject('helper', 'authManager', 'service:auth-manager');

  application.inject('route', 'commentService', 'service:comment-service');
  application.inject('route', 'postService', 'service:post-service');
  application.inject('route', 'blogService', 'service:blog-service');
}

export default {
  name: 'current-user',
  initialize: initialize
};
