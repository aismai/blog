import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.modelFor('posts.show').reload();
  },

  actions: {
    delete(comment) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        let post = comment.get('post');
        console.log('i am not showing up');
        post.get('comments').removeObject(comment);
        post.save().then(() => {
          comment.destroyRecord();
        });
      }
    }
  }
});
