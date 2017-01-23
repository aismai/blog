import Ember from 'ember';
import PostConst from '../const/post';

export default Ember.Service.extend({
  commentService:  Ember.inject.service('comment-service'),
  activityService: Ember.inject.service('activity-service'),
  userService:     Ember.inject.service('user-service'),
  blogService:     Ember.inject.service('blog-service'),
  routing:         Ember.inject.service('-routing'),

  postAddObject(post, object) {
    const modelName = PostConst[object.get('constructor.modelName')];
    post.get(modelName)
        .pushObject(object);
    return post.save();
  },
  savePost(post) {
    post.save()
        .then((savedPost) => {
            this.get('userService')
                .userAddObject(savedPost.get('user'), savedPost);
            this.get('blogService')
                .blogAddObject(savedPost.get('blog'), savedPost)
                .then(() => {
                    this.get('routing')
                        .transitionTo('posts');
                  }
                );
          }
        );
  },
  deletePost(post) {
    post.get('comments')
        .forEach((comment) => {
            this.get('commentService')
                .deleteComment(comment);
          }
        );
    const user = post.get('user');
    this.get('userService')
        .removeObject(user, post)
        .then(() => {
            const blog = post.get('blog');
            blog.get('posts')
                .removeObject(post);
            blog.save()
                .then(() => {
                  this.get('activityService')
                      .createActivity('post-delete', post);
                    post.destroyRecord({adapterOptions: {flashMessage: true}});
                  }
                );
          }
        );
  }
});
