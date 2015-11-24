import Ember from "ember";

export default Ember.Route.extend({
  actions: {
    didTransition() {
      Ember.run.next(function() {
        Ember.$('[data-gist-id]').gist()
      });
    }
  }
});
