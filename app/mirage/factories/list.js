/*
  This is an example factory definition.

  Create more files in this directory to define additional factories.
*/
import Mirage/*, {faker} */ from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  id(i) { return i; },
  name(i) { return `Pantry ${i}`; },
  items: [{name: "Feta", amount: 1},{name: "Bread", amount: 1}]
});
