import AuthenticatedRoute from '../../athenticated-route/route';

export default AuthenticatedRoute.extend({
  model() {
    return this.modelFor('blogs.show')
               .reload();
  },

  actions: {
    deletePost(post) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        this.get('postService').deletePost(post);
      }
    }
  }
});
