import AuthenticatedRoute from '../../../routes/authenticated-route';

export default AuthenticatedRoute.extend({
  model() {
    return this.modelFor('blogs.show')
               .reload();
  },

  actions: {
    deletePost(post) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        //TODO: create service
        // !
        this.get('postService').deletePost(post);
      }
    }
  }
});
