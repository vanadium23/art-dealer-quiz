'use strict';

var React = require('react/addons');

var Actions = require('actions/GameActionCreators');

require('styles/Painting.less');

var Painting = React.createClass({
  handleClick: function (event) {
    if (!this.props.painting.choosen) {
        console.log("handleClick " + this.props.index);
        Actions.choosePainting(this.props.index);
    }
  },
  render: function () {
        var cx = React.addons.classSet;
        var classes = cx({
            'art': true,
            'rotate': this.props.painting.choosen
        });
        var alt = this.props.painting.artist + " " + this.props.painting.name;
        return (
            <article className={classes} onClick={this.handleClick}>
                <img className="image img-left" src={this.props.painting.image} alt={alt} />
                <div className="info">
                  <h2>{this.props.painting.artist}</h2>
                  <p>{this.props.painting.name} ({this.props.painting.year})</p>
                  <p>Была продана за ${this.props.painting.price} млн в {this.props.painting.soldYear}</p>
                </div>
            </article>
        );
  }
});

module.exports = Painting;

