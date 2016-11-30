import AuthenticatedRoute from '../authenticated-route';

export default AuthenticatedRoute.extend({
  blogsArray: [],

  model(){
    return this.store.findAll('blog');
  },

  init() {
    this._super(...arguments);
  },

  resetController(controller, isExiting) {
    if (isExiting) {
      controller.set('user', null);
    }
  },

  actions: {
    selectBlog(blog) {
      if (this.get('blogsArray')
          .includes(blog)) {
        this.get('blogsArray')
          .removeObject(blog);
        blog.set('isClicked', false);
      } else {
        blog.set('isClicked', true);
        this.get('blogsArray')
          .push(blog);
      }
    },
    deleteBlog(blog) {
      let confirmation = confirm('Are you sure?');
      if (confirmation) {
        //TODO: also you need to delete all blog's posts, create service.
        // !
        this.get('blogService').deleteBlog(blog);
      }
    },
    deleteMultiple() {

      if (this.get('blogsArray')) {
        this.get('blogsArray')
          .forEach((blog) => {
            this.get('blogService').deleteBlog(blog);
          });
      }
    }
  }
});
