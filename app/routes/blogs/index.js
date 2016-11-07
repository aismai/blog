import AuthenticatedRoute from '../authenticated-route';

export default AuthenticatedRoute.extend({
  queryParams: {
    user: {refreshModel: true}
  },

  model(param, transition){
    const user_id = transition.queryParams.user;
    if (user_id) {
      return this.store.query('blog', { user: user_id });
    }
    return this.store.findAll('blog');
  },

  actions: {
    deleteBlog(blog) {
      let confirmation = confirm('Are you sure?');
      if (confirmation) {
        const promiseUser = blog.get('user');
        promiseUser.then((user) => {
          user.get('blogs').removeObject(blog);
          user.save();
          blog.destroyRecord();
        });
      }
    }
  }
});
