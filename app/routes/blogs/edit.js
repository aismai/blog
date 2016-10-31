import AuthenticatedRoute from '../authenticated-route';

export default AuthenticatedRoute.extend({

  beforeModel(transition) {
    this._super(...arguments);
    console.log(transition.params);
    this.store.findRecord('blog', transition.params['blogs.edit'].blog_id).then((blog) => {
      if(!blog.get('isAuthor')) {
        transition.abort();
      } else {
        transition.retry()
      }
    });
  },

  model(params){
    return this.store.findRecord('blog', params.blog_id);
  },

  actions: {
    save(blog) {
      blog.save().then(() => {
        this.transitionTo('blogs');
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
