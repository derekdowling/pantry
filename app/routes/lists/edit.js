import Ember from 'ember';

export default Ember.Route.extend({

  controllerName: 'lists.modify',

  renderTemplate: function() {
    this.render('lists.modify');
  },

});
