import AuthenticatedRoute from '../../athenticated-route/route';

export default AuthenticatedRoute.extend({
  activityService: Ember.inject.service('activity-service'),

  model(params) {
    const postPromise = this.store.findRecord('post', params.post_id);
    postPromise.then((post) => {
      if (!post.get('blog.isAuthor')) {
        this.transitionTo('posts');
      }
    });
    return postPromise;
  },

  actions: {
    save(post) {
      post.save({adapterOptions: {flashMessage: true}})
          .then(() => {
            this.get('activityService')
                .createActivity('post-edit', post);
            this.transitionTo('posts');
          });
    },

    willTransition(transition) {
      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");
        if (confirmation) {
          model.unloadRecord();
        } else {
          transition.abort();
        }
      }
    }

  }

});
