import Ember from 'ember';

export default Ember.Component.extend({

  fieldNames: undefined,

  init(){
    this._super(...arguments);
    const model = this.get('items');
    const modelFields = [];
    if (model.get('firstObject')) {
      model.get('firstObject').eachAttribute((fieldName) => {
        modelFields.push({name: fieldName, status: true});
      });
      this.set('fieldNames', modelFields);
    }
  },

  actions: {
    hideField(ignore, fieldsArray) {
      const selected = this.set('field', fieldsArray);
      this.get('fieldNames').forEach((field) => {
        Ember.set(field, 'status', true);
        selected.forEach((selectedField) => {
          if (field.name === selectedField.name) {
            Ember.set(field, 'status', false);
          }
        });
      });


    }
  }

});