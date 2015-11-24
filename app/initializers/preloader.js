import Ember from 'ember';
import Preloader from 'ember-cli-preloader/services/preloader';

const { inject, run } = Ember;

export default {
  name: 'preloader',

  initialize: function(registry, app) {
    let options = app.preloader || {};

    Preloader.reopen({
      options: options
    });

    registry.register('service:preloader', Preloader);
  }
}
