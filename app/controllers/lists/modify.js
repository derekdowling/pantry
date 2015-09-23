import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addItem(name, amount) {
      var item = this.store.createRecord('item', {
        name: name,
        amount: amount
      });
      this.get('model').get('items').pushObject(item);
    }
  }
});
