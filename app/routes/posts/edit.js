import AuthenticatedRoute from '../authenticated-route';

export default AuthenticatedRoute.extend({

  beforeModel(transition) {
    this._super(transition);
    const blog = this.modelFor('blogs.show');
      if(!blog.get('isAuthor')) this.transitionTo('posts');
  },

  model(params){
    return this.store.findRecord('post', params.params_id);
  },

  actions: {
    save(post) {
      post.save().then(() => {
        this.transitionTo('posts');
      });
    },

    willTransition(transition) {
      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");
        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }

  }

});
