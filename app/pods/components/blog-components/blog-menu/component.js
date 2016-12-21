import Ember from 'ember';

export default Ember.Component.extend({
  blogService: Ember.inject.service('blog-service'),
  blogMenuService: Ember.inject.service('blog-menu-service'),
  tagName:     '',

  init() {
    this._super(...arguments);
  },

  actions: {
    setView() {
      this.get('blogMenuService')
          .toggleView();
    },

    toggleMultipleDeletion() {
      this.get('blogMenuService')
          .toggleDeleteAction();
      if (!this.get('blogMenuService.deleteMultiple')) {
        this.get('blogService')
            .resetBlogs();
      }
    },

    deleteBlogs() {
      if (this.get('blogService.multipleDeletionBlogs').length) {
        this.get('blogService.multipleDeletionBlogs')
            .forEach((blog) => {
              this.get('blogService')
                  .deleteBlog(blog);
            });
      }
      this.get('blogService').resetBlogs();
    }
  }

});
