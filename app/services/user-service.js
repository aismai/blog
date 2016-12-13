import Ember from 'ember';
import UserConst from '../const/user';

export default Ember.Service.extend({

  userAddObject(user, object) {
    const modelName = UserConst[object.get('constructor.modelName')];
      user.get(modelName).addObject(object);
      return user.save();
  },

  removeObject(user, object) {
    const modelName = UserConst[object.get('constructor.modelName')];
    user.get(modelName).removeObject(object);
    return user.save();
  }
});
