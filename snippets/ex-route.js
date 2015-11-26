import Ember from "ember";

const { inject } = Ember;

export default Ember.Route.extend({
  preloader: inject.service('preloader'),

  actions: {
    didTransition() {
      this.get('preloader').addLoadedClass('fade-out');
      this.get('preloader').removePreloader(250);
    }
  }
});
