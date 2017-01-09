import Ember from 'ember';

export default Ember.Service.extend({
  userService: Ember.inject.service(),

  deleteComment(comment) {
    const user = comment.get('user');
    this.get('userService')
        .removeObject(user, comment)
        .then(() => {
          const post = comment.get('post');
          post.get('comments')
              .removeObject(comment);
          post.save()
              .then(() => {
                comment.destroyRecord({adapterOptions: {flashMessage: true}});
              });
        });
  }
});
