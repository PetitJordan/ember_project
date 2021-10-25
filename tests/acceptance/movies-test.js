import { test } from 'qunit';
import moduleForAcceptance from 'ember-project/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | movies');

test('visiting /movies', function(assert) {
  visit('/movies');

  andThen(function() {
    assert.equal(currentURL(), '/movies');
  });
});
