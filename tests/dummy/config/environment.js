/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'dummy',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',

    APP: {
      preloader: {
        removeDelay: 250,
        loadedClass: 'fade'
      }
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      'style-src': "'self' 'unsafe-inline' https://fonts.googleapis.com",
      'script-src': "'self' https://gist.github.com",
      'font-src': "'self' https://fonts.gstatic.com data:", // Allow fonts to be loaded from http://fonts.gstatic.com
      // 'img-src': "'self'",
      // 'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com", // Allow inline styles and loaded CSS from http://fonts.googleapis.com
      // 'media-src': "'self'"
    }
  };

  if (environment === 'test') {
    ENV.baseURL = '/';
    ENV.locationType = 'none';
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;
    ENV.APP.rootElement = '#ember-testing';
  }

  return ENV;
};
