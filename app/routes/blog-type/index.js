import AuthenticatedRoute from '../authenticated-route';

//TODO: authenticated route?
//done
export default AuthenticatedRoute.extend({
  model() {
    return this.store.findAll('blog-type');
  }
});
