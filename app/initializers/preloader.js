import Ember from 'ember';

const {
  isBlank,
  run,
  typeOf
} = Ember;

/**
  Applies defaults

  @method getOptions
  @private
*/
function setOptions(obj, wait = 0, className = '') {
  obj.wait = wait;
  obj.className = className;
}

export default {
  name: 'preloader',

  initialize: function(registry, app) {
    let options = app.preloader || {};
    let els = Ember.$('[data-name="preloader"]');
    let div = els.filter('div');

    setOptions(options, options.removeDelay, options.loadedClass);

    run.schedule('afterRender', function() {
      div.addClass(options.className);

      run.later(function() {
        els.remove();

        // for good measure.
        els = null;
        div = null;
      }, options.wait);

    });
  }
}
