import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('comment', {
      post: this.modelFor('posts.show'),
      user: this.get('authManager.currentUser')
    });
  },

  setupController: function (controller, model) {
    this._super(controller, model);

    controller.set('title', 'Leave a  Comment');
  },

  actions: {
    save(comment) {
      comment.save().then(() => {
        const post = comment.get('post');
        post.get('comments').pushObject(comment);
        post.save().then(() => {
          this.transitionTo('comments');
        });
      });
    },

    willTransition() {
      this.controller.get('model').unloadRecord();
    }
  }
});
