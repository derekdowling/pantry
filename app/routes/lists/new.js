import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addItem(name) {
      console.log(name);
      var items = this.get('model.items');
      items.push({"name": name, amount: 1});
      this.set('items', items);
      this.get('itemName').clear();
    }
  }
});
