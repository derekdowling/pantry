import Ember from 'ember';

export default Ember.Controller.extend({
  itemName: "",
  items: Ember.computed.alias('model.items'),
});
