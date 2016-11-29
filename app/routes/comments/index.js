import AuthenticatedRoute from '../authenticated-route';

export default AuthenticatedRoute.extend({
  model() {
    return this.modelFor('posts.show').reload();
  },

  actions: {
    delete(comment) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        let post = comment.get('post');
        let user = comment.get('user');
        user.get('comments').removeObject(comment);

        //TODO: use user.save().then
        user.save();
        post.get('comments').removeObject(comment);
        post.save().then(() => {
          comment.destroyRecord();
        });
      }
    }
  }
});
