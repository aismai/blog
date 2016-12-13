import Ember from 'ember';
import PostConst from '../const/post';

export default Ember.Service.extend({
  commentService: Ember.inject.service('comment-service'),
  userService: Ember.inject.service('user-service'),

  postAddObject(post, object) {
    const modelName = PostConst[object.get('constructor.modelName')];
    post.get(modelName).pushObject(object);
    return post.save();
  },

  deletePost(post) {
    post.get('comments')
      .forEach((comment) => {
          this.get('commentService').deleteComment(comment);
        }
      );
    const user = post.get('user');
    this.get('userService').removeObject(user, post).then(() => {
        const blog = post.get('blog');
        blog.get('posts')
          .removeObject(post);
        blog.save().then(() => {
            post.destroyRecord({ adapterOptions: { flashMessage: true } });
          }
        );
      }
    );
  }
});
