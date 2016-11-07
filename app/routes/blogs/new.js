import AuthenticatedRoute from '../authenticated-route';

export default AuthenticatedRoute.extend({

  actions: {
    save(blog) {
      blog.save().then((savedBlog) => {
        const user = savedBlog.get('user');
        user.then((user) => {
          user.get('blogs').pushObject(savedBlog);
          user.save().then(() => {
            this.transitionTo('blogs');
          });
        });
      });
    },

  }
});
