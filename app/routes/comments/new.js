import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('comment', {
      post: this.modelFor('posts.show')
    });
  },

  actions: {
    save(comment) {
      comment.save().then(() => {
        const post = comment.get('post');
        post.get('comments').pushObject(comment);
        post.save();
        this.transitionTo('comments');
      });

      console.log('save action comments/new');
    },

    willTransition() {
      this.controller.get('model').rollbackAttributes();
    }
  }
});
