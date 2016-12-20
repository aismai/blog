import Ember from 'ember';

export default Ember.Component.extend({
  filteredBlogs: undefined,
  blogsArray: [],

  init() {
    this._super(...arguments);
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
      this.sendAction('blogs', this.get('blogsArray'));
    },

    deleteBlog(blog) {
      let confirmation = confirm('Are you sure?');
      if (confirmation) {
        this.get('blogService')
            .deleteBlog(blog);
      }
    },

    deleteMultiple() {
      if (this.get('blogsArray').length) {
        this.get('blogsArray')
            .forEach((blog) => {
              this.get('blogService')
                  .deleteBlog(blog);
            });
      }
    }
  }
});
