import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: Preloader rendered.', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /', function(assert) {
  visit('/');
  debugger;

  andThen(function() {
    assert.equal(Ember.$('h2#title').html(),"Welcome to Ember.js");
  });
