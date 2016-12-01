import AuthenticatedRoute from '../../athenticated-route/route';

export default AuthenticatedRoute.extend({

  actions: {
    save(blog) {
      blog.save()
          .then((savedBlog) => {
            const promiseUser = savedBlog.get('user');
            promiseUser.then((user) => {
              user.get('blogs')
                  .pushObject(savedBlog);
              user.save()
                  .then(() => {
                    this.transitionTo('blogs');
                  });
            });
          });
    }

  }
});
