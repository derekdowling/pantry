import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('lists', function() {
    this.route('new');
    this.route('all', {path: '/'})
    this.route('index', {path: '/:list_id'});
  });
});

export default Router;
