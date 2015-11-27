import Ember from "ember";

export default Ember.Route.extend({
  redirectl() {
    this.transitionTo('about');
  },

  model() {
      return new Ember.RSVP.Promise(resolve => {
        Ember.run.later(null, resolve, 300);
      });
  },

  preloader: Ember.inject.service(),

  actions: {
    didTransition() {
      this.get('preloader').removePreloader(250);
    }
  }
});
