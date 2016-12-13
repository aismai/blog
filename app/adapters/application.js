import LSAdapter from 'ember-localstorage-adapter';
import Ember from 'ember';

export default LSAdapter.extend({
  flashMessages: Ember.inject.service(),
  namespace: 'gecko',

  createRecord(store, type, snapshot) {
    const namespaceRecords = this._namespaceForType(type);
    const serializer = store.serializerFor(type.modelName);
    const recordHash = serializer.serialize(snapshot, { includeId: true });
    namespaceRecords.records[recordHash.id] = recordHash;

    this.persistData(type, namespaceRecords);
    this.get('flashMessages').add({
      message: `Success! ${type.modelName.capitalize()} has been created`,
      type: 'success'
    });
    return Ember.RSVP.resolve();
  },

  updateRecord (store, type, snapshot) {
    const namespaceRecords = this._namespaceForType(type);
    const id = snapshot.id;
    const serializer = store.serializerFor(type.modelName);

    namespaceRecords.records[id] = serializer.serialize(snapshot, { includeId: true });

    this.persistData(type, namespaceRecords);

    if (Ember.get(snapshot, 'adapterOptions.flashMessage')) {
      this.get('flashMessages').add({
        message: `${type.modelName.capitalize()} has been updated!`,
        type: 'info'
      });
    }

    return Ember.RSVP.resolve();
  },

  deleteRecord(store, type, snapshot) {
    const namespaceRecords = this._namespaceForType(type);
    const id = snapshot.id;

    delete namespaceRecords.records[id];

    this.persistData(type, namespaceRecords);

    if (Ember.get(snapshot, 'adapterOptions.flashMessage')) {
      this.get('flashMessages').add({
        message: `${type.modelName.capitalize()} has been deleted!`,
        type: 'negative'
      });
      return Ember.RSVP.resolve();
    }
  }
});
