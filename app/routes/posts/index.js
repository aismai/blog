import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    //TODO: reload model before showing all posts
    //done
    return this.modelFor('blogs.show').reload();
  }
});
