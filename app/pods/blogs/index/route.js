import AuthenticatedRoute from '../../athenticated-route/route';

export default AuthenticatedRoute.extend({
  blogsArray: [],

  init() {
    this._super(...arguments);
  },

  resetController(controller, isExiting) {
    if (isExiting) {
      controller.set('user', null);
    }
  },

  actions: {
    setBlogsArray(blogsArray) {
      this.set('blogsArray', blogsArray);
    },

    setView() {
      this.get('gridService')
          .toggleView();
    },

    deleteMultiple() {
      if (this.get('blogsArray')) {
        this.get('blogsArray')
            .forEach((blog) => {
              this.get('blogService')
                  .deleteBlog(blog);
            });
      }
    }
  }
});
