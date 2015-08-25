import Ember from 'ember';

export default Ember.Controller.extend({
  test: function() {
    console.log(this.get('model'));
  }.property('model')
});
