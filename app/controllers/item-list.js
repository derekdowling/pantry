import Ember from 'ember';

export default Ember.Controller.extend({
  completed: Ember.computed('items', function() {
    let completed = 0;
    return completed;
  }),
});
