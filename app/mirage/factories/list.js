/*
  This is an example factory definition.

  Create more files in this directory to define additional factories.
*/
import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  id: (i) => {
    return i;
  },
  "name": faker.company.companyName,
  "items": function(i) {
    var items = [];
    for(var c = 0; c < 3; c++) {
      items.push({
        list: i,
        name: faker.company.companyName,
        amount: faker.random.number
      });
    };
    return items;
  }
});
