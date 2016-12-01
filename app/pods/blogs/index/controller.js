import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['sortBy'],
  sortBy:      null,

  filteredBlogs: Ember.computed(
    'sortBy', 'model',
    function () {
      //TODO: why 'let'?
      //!
      const userId = this.get('sortBy');
      const blogs  = this.get('model');

      if (userId) {
        //TODO: rename or refactor. User should be compared with user, id with id
        //!
        return blogs.filterBy('user.id', userId);
      } else {
        return blogs;
      }
    }
  )
});
