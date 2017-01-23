import Ember from 'ember';
import BlogConst from '../const/blog';

export default Ember.Service.extend({
  postService:     Ember.inject.service('post-service'),
  userService:     Ember.inject.service('user-service'),
  activityService: Ember.inject.service('activity-service'),
  store:           Ember.inject.service(),
  routing:         Ember.inject.service('-routing'),

  multipleDeletionBlogs: [],

  blogAddObject(blog, object) {
    const modelName = BlogConst[object.get('constructor.modelName')];
    blog.get(modelName)
        .pushObject(object);
    return blog.save();
  },

  saveBlog(blog) {
    blog.save()
        .then((savedBlog) => {
            savedBlog.get('user')
                     .then((user) => {
                         this.get('userService')
                             .userAddObject(user, savedBlog)
                             .then(() => {
                                 this.get("routing")
                                     .transitionTo('blogs');
                               }
                             );
                       }
                     );
          }
        );
  },

  deleteBlog(blog) {
    blog.get('posts')
        .forEach((post) => {
            this.get('postService')
                .deletePost(post);
          }
        );
    blog.get('user')
        .then((user) => {
            this.get('userService')
                .removeObject(user, blog)
                .then(() => {
                    this.get('activityService')
                        .createActivity('blog-delete', blog);
                    blog.destroyRecord({adapterOptions: {flashMessage: true}});
                  }
                );
          }
        );
  },

  resetBlogs() {
    this.get('multipleDeletionBlogs')
        .forEach((blog) => {
          blog.set('isClicked', false);
        });
    this.set('multipleDeletionBlogs', []);
  }
});
