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

  delete(blog){
    const promiseUser = blog.get('user');
    promiseUser.then((user) => {
      user.get('blogs')
          .removeObject(blog);
      user.save();

      //TODO: also you need to delete all blog's posts
      blog.destroyRecord();
    });
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
        this.delete(blog);
      }
    },
    deleteMultiple() {

      if (this.get('blogsArray')) {
        this.get('blogsArray')
            .forEach((blog) => {
              this.delete(blog);
            });
      }
    }
  }
});
