import AuthenticatedRoute from '../authenticated-route';

export default AuthenticatedRoute.extend({
  model() {
    return this.modelFor('posts.show').reload();
  },

  actions: {
    delete(comment) {
      const confirmation = confirm('Are you sure?');

      if (confirmation) {
        const post = comment.get('post');
        const user = comment.get('user');
        //TODO: use user.save().then
        //!
        user.get('comments').removeObject(comment);
        user.save().then(() => {
          post.get('comments').removeObject(comment);
          post.save().then(() => {
            comment.destroyRecord();
          });
        });
      }

    }
  }
});
