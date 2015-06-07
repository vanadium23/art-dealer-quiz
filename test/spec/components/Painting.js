'use strict';

describe('Painting', function () {
  var React = require('react/addons');
  var Painting, component;

  beforeEach(function () {
    Painting = require('components/Painting.js');
    component = React.createElement(Painting);
  });

  it('should create a new instance of Painting', function () {
    expect(component).toBeDefined();
  });
});
