import Ember from 'ember';

export default Ember.Component.extend({
  activityType: Ember.computed('item',
    function () {
      // console.log(this.get('item.type').includes('type-of-create'));
      return this.returnActivityType(this.get('item'));
      // return `activity/${this.get('item.type')}`;
    }
  ),

  returnActivityType(item) {
    const activityType = {
      'blog-create':    'type-of-create',
      'blog-edit':      'type-of-edit',
      'blog-delete':    'type-of-delete',
      'post-create':    'type-of-create',
      'post-edit':      'type-of-edit',
      'post-delete':    'type-of-create',
      'comment-create': 'type-of-create',
      'comment-edit':   'type-of-edit',
      'comment-delete': 'type-of-create',
    };
    return `activity/${activityType[item.get('type')]}`;
  }

});
