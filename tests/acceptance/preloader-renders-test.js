import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';
import config from 'dummy/config/environment';

const { APP } = config;
const { preloader } = APP;

let application;

module('Acceptance: Preloader rendered.', {
  beforeEach: function(assert) {
    assert.equal(Ember.$('style[data-name="preloader"]').length, 1, "Preloader is in DOM before App runs.");
    assert.equal(Ember.$('div[data-name="preloader"]').length, 1, "Preloader is in DOM before App runs.");
    assert.equal(Ember.$(`[data-name="preloader"].${preloader.loadedClass}`).length, 0, "'fade' class not added yet.");
    application = startApp();
  },

  afterEach: function() {
    // Ember.run.next(application, 'destroy');
  }
});

test('Preloader in DOM.', function(assert) {
  assert.expect(5);

  visit('/');

  Ember.run.next(this, () => {
    assert.equal(Ember.$(`[data-name="preloader"].fade`).length, 1, "'fade' class added.");
  });
  andThen(function() {
    assert.equal(Ember.$('[data-name="preloader"]').length, 0, "Preloader is removed.");
  });
});
