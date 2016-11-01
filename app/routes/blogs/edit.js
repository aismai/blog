import AuthenticatedRoute from '../authenticated-route';

export default AuthenticatedRoute.extend({

  model(params){
    const blogPromise =  this.store.findRecord('blog', params.blog_id);
    blogPromise.then((blog) => {
        if(!blog.get('isAuthor')) {
          console.log('not the author');
          this.transitionTo('blogs');
        }
    });
    return blogPromise;
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
