import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('character-list-entry', 'Integration | Component | character list entry', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{character-list-entry}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#character-list-entry}}
      template block text
    {{/character-list-entry}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
