import AuthenticatedRoute from '../authenticated-route';

export default AuthenticatedRoute.extend({

  model() {
    return this.store.createRecord('comment', {
      post: this.modelFor('posts.show'),
      user: this.get('authManager.currentUser')
    });
  },

  actions: {
    save(comment) {
      comment.save().then((savedComment) => {
        const post = savedComment.get('post');
        const user = savedComment.get('user');
        user.get('comments').pushObject(savedComment);
        user.save();
        post.get('comments').pushObject(savedComment);
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
