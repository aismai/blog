import AuthenticatedRoute from '../../athenticated-route/route';

export default AuthenticatedRoute.extend({
  model() {
    return this.store.createRecord('blog-type');
  },

  actions: {
    save(blogType) {
      blogType.save()
              .then(() => {
                this.transitionTo('blogs');
              });
    },

    willTransition() {
      this.controller.get('model')
          .unloadRecord();
    }
  }
});
