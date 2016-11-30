import Ember from 'ember';

export default Ember.Service.extend({
  postService: Ember.inject.service('post-service'),

  deleteBlog(blog) {
    blog.get('posts').then((posts) => {
      posts.forEach((post) => {
        this.get('postService').deletePost(post);
      });
    });

    const user = blog.get('user');
    user.get('blogs').then((blogs) => {
      blogs.removeObject(blog);
    });
    user.then((user) => {
      user.save();
    });

    blog.destroyRecord();

  }
});
