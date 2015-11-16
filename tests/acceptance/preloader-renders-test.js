import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: Preloader rendered.', {
  beforeEach: function(assert) {
    assert.equal(Ember.$('[data-name="preloader"]').length, 2, "Preloader is in DOM before App runs.");
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('Preloader in DOM.', function(assert) {
  assert.expect(3);
  assert.equal(Ember.$('[data-name="preloader"].fade').length, 1, "Preloader 'fade' class added.");
  visit('/');
  andThen(function() {
    assert.equal(Ember.$('[data-name="preloader"]').length, 0, "Preloader is removed.");
  });
});
