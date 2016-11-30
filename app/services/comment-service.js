import Ember from 'ember';

export default Ember.Service.extend({

  deleteComment(comment) {
    const user = comment.get('user');
    user.get('comments').then((comments) => {
      comments.removeObject(comment);
    });
    user.save();

    const post = comment.get('post');
    post.get('comments').then((comments) => {
      comments.removeObject(comment);
    });
    post.save();
    comment.destroyRecord();
  }
});
