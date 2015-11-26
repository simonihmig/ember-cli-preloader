import Ember from "ember";

export default Ember.Route.extend({
  model() {
      return new Ember.RSVP.Promise(resolve => {
        Ember.run.later(null, resolve, 325);
      });
  },

  afterModel() {
    this.transitionTo('about');
  },

  preloader: Ember.inject.service(),

  actions: {
    didTransition() {
      this.get('preloader').removePreloader();
    }
  }
});
