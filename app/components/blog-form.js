import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  blog: undefined,
  blogTypeList: Ember.computed(function () {
    return this.get('store').findAll('blog-type');
  }),

  init() {
    this._super(...arguments);
    const blog = this.get('item') || this.get('store').createRecord('blog', {
        user: this.get('authManager.currentUser'),
      });
    this.set('blog', blog);
  },

  willDestroyElement() {
    this.get('blog').unloadRecord();
  },

  actions: {
    chooseBlogType(type){
      const selectedType = this.set('type', type);
      this.get('blog').set('blogType', selectedType);
    },

    //TODO: rename 'param' in all components
    buttonClicked(blogParams) {
      this.sendAction('action', blogParams);
    }
  }
});
