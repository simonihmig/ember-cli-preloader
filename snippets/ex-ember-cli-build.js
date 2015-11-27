module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    'ember-cli-preloader': {
      paths: {
        html: 'app/templates/misc/loading-bar.html',
        css: 'app/styles/animation/loading-bar.css'
      }
    }
  });

  return app.toTree();
}
