import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  amount: DS.attr('number'),
  fulfilled: DS.attr('boolean'),
  list: DS.belongsTo('list'),
});
