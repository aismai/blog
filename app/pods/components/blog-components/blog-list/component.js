import Ember from 'ember';

export default Ember.Component.extend({
  blogService:     Ember.inject.service('blog-service'),
  blogMenuService: Ember.inject.service('blog-menu-service'),

  init() {
    this._super(...arguments);
  },

  actions: {
    selectBlog(blog) {
      if (this.get('blogService.multipleDeletionBlogs')
              .includes(blog)) {
        this.get('blogService.multipleDeletionBlogs')
            .removeObject(blog);
        blog.set('isClicked', false);
      } else {
        blog.set('isClicked', true);
        this.get('blogService.multipleDeletionBlogs')
            .pushObject(blog);
      }
    },

    deleteBlog(blog) {
      let confirmation = confirm('Are you sure?');
      if (confirmation) {
        this.get('blogService')
            .deleteBlog(blog);
      }
    }
  }
});
