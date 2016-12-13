export function initialize(application) {
  application.inject('route', 'authService', 'service:auth-service');
  application.inject('component', 'authService', 'service:auth-service');
  application.inject('controller', 'authService', 'service:auth-service');
  application.inject('model', 'authService', 'service:auth-service');
  application.inject('helper', 'authService', 'service:auth-service');

  application.inject('route', 'commentService', 'service:comment-service');
  application.inject('route', 'postService', 'service:post-service');
  application.inject('route', 'blogService', 'service:blog-service');
	application.inject('component', 'blogService', 'service:blog-service');

	application.inject('route', 'userService', 'service:user-service');

  application.inject('route', 'gridService', 'service:grid-service');
  application.inject('controller', 'gridService', 'service:grid-service');
	application.inject('component', 'gridService', 'service:grid-service');

  application.inject('route', 'filterService', 'service:filter-service');
  application.inject('component', 'filterService', 'service:filter-service');
  application.inject('controller', 'filterService', 'service:filter-service');


}

export default {
  name: 'application',
  initialize: initialize
};
