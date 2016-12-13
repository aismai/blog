import Ember from 'ember';

export default Ember.Component.extend({
  tagName:           '',
  store:             Ember.inject.service(),
  categories:        undefined,
  blogsInitialState: undefined,

  init() {
    this._super(...arguments);
    this.set('categories', this.get('store')
                               .findAll('blog-type'));
    this.set('blogsInitialState', this.get('filterService.blogs'));
  },

  actions: {
    filterByCategory(category) {
      this.set('selected', category);
      const filteredBlogsArray = this.get('blogsInitialState')
                                     .filter((blog) => {
                                     });
    }
  }
});
