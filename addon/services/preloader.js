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
    let loadedClass = this.get('options.loadedClass');

    if ('undefined' === typeof className && loadedClass === false) {
      return;
    } else {
      className = ('string' === typeof className) ? className : (loadedClass || '');
    }

    let div = this.get('els').filter('div');

    return div && div.addClass && div.addClass(className);
  },

  removePreloader(delay) {
    let removeDelay = this.get('options.removeDelay');

    if ('undefined' === typeof delay && removeDelay === false) {
      return;
    } else {
      delay = isNaN(delay) ? (removeDelay || 0) : delay;
    }

    run.later(this, function() {
      let els = this.get('els');
      if (els && els.remove) {
        this.get('els').remove();
        this.set('els', null);
      }
    }, delay);
  }

});
