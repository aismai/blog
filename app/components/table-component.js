import Ember from 'ember';

export default Ember.Component.extend({

  fieldNames: undefined,

  init(){
    this._super(...arguments);
    const model = this.get('items');
    const modelFields = [];
    if (model.get('firstObject')) {
      model.get('firstObject').eachAttribute((fieldName) => {
        modelFields.push({name: fieldName, displayField: true});
      });
      this.set('fieldNames', modelFields);
    }
  },

  actions: {
    hideField(ignore, fieldsArray) {
      //TODO: same as Marat, use contains()
      // used include
      const selected = this.set('field', fieldsArray);
      this.get('fieldNames').forEach((field) => {
        Ember.set(field, 'displayField', true);
        selected.forEach((selectedField) => {
          // field.name === selectedField.name
          if (field.name.includes(selectedField.name)) {
            Ember.set(field, 'displayField', false);
          }
        });
      });
    }

  }

});
