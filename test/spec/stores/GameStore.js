'use strict';

describe('GameStore', function() {
  var store;

  beforeEach(function() {
    store = require('stores/GameStore.js');
  });

  it('should be defined', function() {
    expect(store).toBeDefined();
  });
});
