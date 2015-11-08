/* jshint node: true */
'use strict';

var fs    = require('fs');
var path  = require('path');

function getInjectionFor(type, filePath) {
  var content = [];

  content.push('<' + type + ' data-name="preloader">');
  content.push(fs.readFileSync(path.join(process.cwd(), filePath), { encoding: 'utf8' }));
  content.push('</' + type + '>');

  return content;
}

module.exports = {
  name: 'preloader',

  isDevelopingAddon: function() {
    return true;
  },

  contentFor: function(name, config) {
    console.log(name);
    if (name === 'body') {
      return getInjectionFor('div', 'app/preloader/preloader.html');
    }

    if (name === 'head-footer') {
      return getInjectionFor('style', 'app/preloader/preloader.css');
    }
  }
};
