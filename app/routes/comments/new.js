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

      //TODO: use saved object in 'then' method in all promises
      // comment.save().then((savedComment) => {});
      comment.save().then((savedComment) => {

        const post = savedComment.get('post');
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
