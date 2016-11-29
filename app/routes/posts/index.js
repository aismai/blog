import AuthenticatedRoute from '../authenticated-route';

export default AuthenticatedRoute.extend({
  model() {
    return this.modelFor('blogs.show')
               .reload();
  },

  actions: {
    deletePost(post) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        let blog = post.get('blog');
        let user = post.get('user');
        user.get('posts')
            .removeObject(post);

        //TODO: use user.save().then. Also you need to delete all comments
        user.save();
        blog.get('posts')
            .removeObject(post);
        blog.save()
            .then(() => {
              post.destroyRecord();
            });
      }
    }
  }
});
