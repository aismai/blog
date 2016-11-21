import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('blogs', function() {
    this.route('new');
    this.route('edit', { path: '/:blog_id/edit' });

    this.route('show', {
      path: ':blog_id'
    }, function () {
      this.route('posts', { resetNamespace: true }, function() {
        this.route('new');
        this.route('edit', { path: '/:post_id/edit' });

        this.route('show', {
          path: ':post_id'
        }, function () {
          this.route('comments', { resetNamespace: true }, function() {
            this.route('edit', { path: '/:comment_id/edit' });
            this.route('new');
          });
        });
      });
    });
  });

  this.route('users', function() {
    this.route('new', {path: '/register'});
    this.route('show', {path: ':user_id'});
  });

  this.route('blog-type', function() {
    this.route('new');
  });

  this.route('login');

  this.route('roles', function() {
    this.route('new');
  });

  this.route('permissions', function() {
    this.route('new');
  });

});

export default Router;
