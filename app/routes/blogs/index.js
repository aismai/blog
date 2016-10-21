import AuthenticatedRoute from '../authenticated-route';

export default AuthenticatedRoute.extend({
  model(){
    return this.store.findAll('blog');
  },

  actions: {
    deleteBlog(blog) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        blog.destroyRecord();
      }
    }
  }
});
