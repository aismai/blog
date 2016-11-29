import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['sortBy'],
  sortBy: null,

  filteredBlogs: Ember.computed('sortBy', 'model', function () {

    //TODO: why 'let'?
    let user = this.get('sortBy');
    let blogs = this.get('model');


    if (user) {

      //TODO: rename or refactor. User should be compared with user, id with id
      return blogs.filterBy('user.id', user);
    } else {
      return blogs;
    }
  })
});
