import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var list = this.store.createRecord('list', {
      id: 1,
      name: "Pantry"
    });

    var bread = this.store.createRecord('item', {
      name: "Bread",
      amount: 1,
    });

    var feta = this.store.createRecord('item', {
      name: "Feta",
      amount: 1,
    });

    list.get('items').pushObject(bread);
    list.get('items').pushObject(feta);

    list.save();
  }
});
