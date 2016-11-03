import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  blog: undefined,
  blogTypeList: Ember.computed(function () {
    return this.get('store').findAll('blog-type');
  }),

  // init() {}, willInsertElement() {}, action-save();
  init() {
    this._super(...arguments);
    const blog = this.get('item') || this.get('store').createRecord('blog', {
        user: this.get('authManager.currentUser'),
      });
    this.set('blog', blog);
  },

  actions: {
    buttonClicked(blog) {
      this.sendAction('action', blog);
    }
  }
});
