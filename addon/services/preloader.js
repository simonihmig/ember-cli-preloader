import Ember from 'ember';

const { run } = Ember;

export default Ember.Object.extend({
  init: function() {
    let els = Ember.$('[data-name="preloader"]');

    if (els.length) {
      this.set('els', els);
      run.schedule('afterRender', this, 'addLoadedClass');
      run.schedule('afterRender', this, 'removePreloader');
    }
  },

  options: null,

  addLoadedClass(className) {
    if ('undefined' !== typeof className) {
      className = className;
    } else {
      className = this.get('options.loadedClass') || '';
    }

    if (className === false) {
      return;
    }

    let div = this.get('els').filter('div');

    return div && div.addClass && div.addClass(className);
  },

  removePreloader(delay) {
    if ('undefined' !== typeof delay) {
      delay = delay;
    } else {
      delay = isNaN(delay) ? this.get('options.removeDelay') : delay;
    }

    if (delay === false) {
      return;
    }

    run.later(this, function() {
      this.get('els').remove();
    }, delay);
  }

});
