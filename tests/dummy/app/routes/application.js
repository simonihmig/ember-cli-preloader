import Ember from "ember";

export default Ember.Route.extend({
  redirect() {
    this.transitionTo('about');
  },

  model() {
      return new Ember.RSVP.Promise(resolve => {
        Ember.run.later(null, resolve, 300);
        this.get('preloader').removePreloader(300);
        this.get('preloader').addLoadedClass('fade');
      });
  },

  preloader: Ember.inject.service()
});
