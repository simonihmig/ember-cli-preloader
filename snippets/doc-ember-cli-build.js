module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    'ember-cli-preloader': {
      paths: {
        html: 'app/preloader/preloader.html',
        css: 'app/preloader/preloader.css'
      }
    }
  });

  return app.toTree();
}
