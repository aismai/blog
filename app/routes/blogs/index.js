import AuthenticatedRoute from '../authenticated-route';

export default AuthenticatedRoute.extend({
  model(){
    return this.store.findAll('blog');
  },

  resetController(controller, isExiting) {
    if (isExiting) {
      controller.set('user', null);
    }
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
