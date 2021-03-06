/* jshint node: true */
'use strict';

var fs    = require('fs');
var path  = require('path');

function getInjectionFor(type, filePath) {
  var content = [];

  content.push('<' + type + ' data-name="preloader">');
  content.push(fs.readFileSync(path.join(this.app.project.root, filePath), { encoding: 'utf8' }));
  content.push('</' + type + '>');

  return content;
}

module.exports = {
  name: 'ember-cli-preloader',

  isDevelopingAddon: function() {
    return true;
  },

  included: function(app) {
    this.app = app;
    this.addonOptions = app.options['ember-cli-preloader'] || {};
    this.addonPaths = this.addonOptions['paths'] || {};
  },

  contentFor: function(name, config) {
    if (config.environment === 'test') {
      return;
    }

    if (name === 'body') {
      var htmlPath = this.addonPaths['html'] || 'app/preloader/preloader.html';

      return getInjectionFor.call(this, 'div', htmlPath);
    }

    if (name === 'head-footer') {
      var cssPath = this.addonPaths['css'] || 'app/preloader/preloader.css';

      return getInjectionFor.call(this, 'style', cssPath);
    }
  }
};
