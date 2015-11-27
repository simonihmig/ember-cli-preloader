import { module, test } from 'qunit';
import Preloader from 'ember-cli-preloader/services/preloader';

module('Unit | Service | preloader');

test('it exists', function(assert) {
  var preloader = Preloader.create({
    options: {}
  });

  assert.ok(preloader);
});
