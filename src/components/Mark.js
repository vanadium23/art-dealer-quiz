'use strict';

var React = require('react/addons');

//var Actions = require('actions/xxx')

require('styles/Mark.less');

var Mark = React.createClass({

  render: function () {
    var status = this.props.status || {form: 'mark', color: 'blue'};
    if (status.mark === 0) {
        status.form = 'greater';
    } else if (status.mark === 1) {
        status.form = 'lesser';
    }
    if (status.correct === true) {
        status.color = 'green';
    } else if (status.correct === false) {
        status.color = 'red';
    }
    console.log(status);

    var classes = ['central-elem',
                  'central-mark',
                    status.form,
                    status.color].join(' ');

    return (
        <div className={classes}></div>
      );
  }
});

module.exports = Mark;

