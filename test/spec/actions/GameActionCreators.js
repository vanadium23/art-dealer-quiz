'use strict';

describe('GameActionCreators', function() {
  var action;

  beforeEach(function() {
    action = require('actions/GameActionCreators.js');
  });

  it('should be defined', function() {
    expect(action).toBeDefined();
  });
});
