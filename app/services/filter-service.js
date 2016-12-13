import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),
  blogs: undefined,

  init() {
    this.initBlogs();
  },

  initBlogs() {
    this.set('blogs', this.get('store').findAll('blog'));
  },

  setBlogs(filteredBlogs) {
    this.set('blogs', filteredBlogs);
  }
});
