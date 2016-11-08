import Ember from 'ember';

export default Ember.Component.extend({

  fieldNames: undefined,

  init(){
    this._super(...arguments);
    const model = this.get('items');
    const modelFields = [];

    model.get('firstObject').eachAttribute((fieldName) => {
      modelFields.push(fieldName);
    });
    this.set('fieldNames', modelFields);
  }

});