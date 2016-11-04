import AuthenticatedRoute from '../authenticated-route';

export default AuthenticatedRoute.extend({
  model(){
    return this.store.findAll('blog');
  },

  actions: {
    deleteBlog(blog) {
      let confirmation = confirm('Are you sure?');
      if (confirmation) {
        const user = blog.get('user');
        user.get('blogs').removeObject(blog);
        user.save();
        blog.destroyRecord();
      }
    }
  }
});
