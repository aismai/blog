import Ember from 'ember';

//TODO: authenticated route?
export default Ember.Route.extend({
  model() {
    return this.store.findAll('blog-type');
  }
});
