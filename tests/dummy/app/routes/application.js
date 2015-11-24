import Ember from "ember";

export default Ember.Route.extend({
  // activate: function() {},
  // deactivate: function() {},
  // setupController: function(controller, model) {},
  // renderTemplate: function() {},
  // beforeModel: function() {},
  // afterModel: function() {},

  model: function() {
      return new Ember.RSVP.Promise(resolve => {
        Ember.run.later(null, resolve, 400);
      });
  },

  preloader: Ember.inject.service(),

  actions: {
    didTransition() {
      this.get('preloader').removePreloader();
    }
  }
});
