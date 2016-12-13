import AuthenticatedRoute from '../../athenticated-route/route';
import Ember from 'ember';

export default AuthenticatedRoute.extend({

  userService: Ember.inject.service(),
  actions: {
    save(blog) {
      blog.save()
        .then((savedBlog) => {
          savedBlog.get('user').then((user) => {
            this.get('userService').userAddObject(user, savedBlog)
              .then(() => {
                this.transitionTo('blogs');
              });
          });
        });
    }

  }
});
