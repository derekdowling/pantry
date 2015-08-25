import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    select(item) {
      console.log(item);
    }
  }
});
