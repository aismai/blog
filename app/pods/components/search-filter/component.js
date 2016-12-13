import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  filterService: Ember.inject.service('filter-service'),
  blogsInitialState: undefined,

  filteredObs: Ember.observer(
    'filterParam', function () {
      const searchParam = this.get('filterParam')
                              .toUpperCase();
      if (searchParam) {
        const filteredBlogsArray = this.get('blogsInitialState')
                                       .filter((blog) => {

                                         const blogName        = blog.get('name');
                                         const blogDescription = blog.get('description');

                                         const findByName = blogName && blogName
                                             .toUpperCase()
                                             .includes(searchParam);

                                         const findByDescription = blogDescription && blogDescription
                                             .toUpperCase()
                                             .includes(searchParam);

                                         return findByName || findByDescription;
                                       });
        this.get('filterService').setBlogs(filteredBlogsArray);
      } else {
        this.get('filterService').setBlogs(this.get('blogsInitialState'));
      }
    }
  ),

  init() {
    this._super(...arguments);
    this.set('blogsInitialState',this.get('filterService.blogs'));
  }

});
