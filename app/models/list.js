import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  items: DS.hasMany('item')
  // remaining: Ember.computed('items', function() {
    // let remaining = 0;
    // for (let i of this.get('items')) {
      // if (!i.fulfilled) {
        // remaining++;
      // }
    // }
    // return remaining;
  // })
});
