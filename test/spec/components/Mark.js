'use strict';

describe('Mark', function () {
  var React = require('react/addons');
  var Mark, component;

  beforeEach(function () {
    Mark = require('components/Mark.js');
    component = React.createElement(Mark);
  });

  it('should create a new instance of Mark', function () {
    expect(component).toBeDefined();
  });
});
