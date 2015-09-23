import Ember from 'ember';

export default Ember.Component.extend({

  changeName: false,

  addItemToggle: false,

  newItemName: '',

  newItemAmount: 1,

  actions: {
    changeName() {
      this.set('changeName', true);
    },
    saveName() {
      this.get('list').save().then(
        () => this.set('changeName', false),
        (error) => console.log(error)
      );
    },
    toggleAddItem() {
      this.set('addItemToggle', !this.get('addItemToggle'));
    },
    addItem() {
      var itemName = this.get('newItemName');
      var itemAmount = this.get('newItemAmount');
      this.set('addItemToggle', false);
      this.set('newItemName', '');
      this.set('newItemAmount', 1);
      this.sendAction('addItem', itemName, itemAmount);
    },

  }
});
