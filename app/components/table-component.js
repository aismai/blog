import Ember from 'ember';

export default Ember.Component.extend({

  fieldNames: undefined,

  init(){
    this._super(...arguments);
    const model = this.get('items');
    const modelFields = [];
    if (model.get('firstObject')) {
      model.get('firstObject').eachAttribute((fieldName) => {
        modelFields.push(fieldName);
      });
      this.set('fieldNames', modelFields);
    }
  }
});