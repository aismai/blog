import Ember from 'ember';

export default Ember.Service.extend({
  store:         Ember.inject.service(),
  blogs:         undefined,
  filteredBlogs: undefined,
  init() {
    this.get('store')
        .findAll('blog')
        .then((blogs) => {
          this.set('blogs', blogs);
          this.set('filteredBlogs', blogs);
        });
  },

  setBlogs(blogs) {
    this.set('filteredBlogs', blogs);
  }
});
