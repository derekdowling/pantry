var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var Funnel = require('broccoli-funnel');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('bower_components/materialize/dist/js/materialize.js');

  var extraAssets = new Funnel('bower_components/materialize/dist', {
    srcDir: '/font',
    include: ['**/*'],
    destDir: '/font'
  });

  return app.toTree(extraAssets);
};
