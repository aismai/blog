import AuthenticatedRoute from '../../athenticated-route/route';

export default AuthenticatedRoute.extend({
  model() {
    return this.modelFor('posts.show').reload();
  },

  actions: {
    delete(comment) {
      const confirmation = confirm('Are you sure?');
      if (confirmation) {
        // TODO: create service
        // !
        this.get('commentService').deleteComment(comment);
      }
    }
  }
});
