import Ember from 'ember';
import BlogConst from '../const/blog';

export default Ember.Service.extend({
  postService: Ember.inject.service('post-service'),
  userService: Ember.inject.service('user-service'),
  store: Ember.inject.service(),

  blogAddObject(blog, object) {
    const modelName = BlogConst[object.get('constructor.modelName')];
    blog.get(modelName).pushObject(object);
    return blog.save();
  },

  deleteBlog(blog) {
    blog.get('posts')
      .forEach((post) => {
          this.get('postService').deletePost(post);
        }
      );

    blog.get('blogType').then((type) => {
      console.log(this.get('store')
                      .findRecord('blog-type', type.id));
    });

    blog.get('user').then((user) => {
        this.get('userService').removeObject(user, blog)
          .then(() => {
              blog.destroyRecord({ adapterOptions: { flashMessage: true } });
            }
          );
      }
    );
  }
});
