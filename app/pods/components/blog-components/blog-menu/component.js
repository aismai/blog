import Ember from 'ember';

export default Ember.Component.extend({
  blogService: Ember.inject.service('blog-service'),
  gridService: Ember.inject.service('grid-service'),
  tagName:     '',

  init() {
    this._super(...arguments);
  },

  actions: {
    setView() {
      this.get('gridService')
          .toggleView();
    },

    toggleMultipleDeletion() {
      this.get('gridService')
          .toggleDeleteAction();
      if (!this.get('gridService.deleteMultiple')) {
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
