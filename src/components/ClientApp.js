'use strict';

var React = require('react/addons');
var Reflux = require('reflux');
var Painting = require('components/Painting');
var Mark = require('components/Mark');
var Progress = require('components/Progress');
var GameStore = require('stores/GameStore');
var Actions = require('actions/GameActionCreators');


// CSS
require('normalize.css');
require('../styles/main.css');

var ClientApp = React.createClass({
      mixins: [Reflux.listenTo(GameStore, "onStatusChange")],
      getInitialState: function() {
        Actions.generateQuiz();
        return {
          app: {
            quiz: [{
              choosen: false
            }, {
              choosen: false
            }, ]
          }
        };
      },
      onStatusChange: function(app) {
        this.setState({
          app: app
        });
      },
    render: function() {
      var completed = Math.floor(this.state.app.wins/this.state.app.TOTAL * 100);
      if (!this.state.app.complete) {
          return (
          <div className="main-wrapper">
            <header>
              <h1>Art Dealer Quiz</h1>
            </header>
            <section className="main-content">
              <div className="central-elem img-container left">
                <Painting painting={this.state.app.quiz[0]} index="0" />
              </div>
              <Mark status={this.state.app.status} />
              <div className="central-elem img-container right">
                <Painting painting={this.state.app.quiz[1]} index="1" />
              </div>
            </section>
            <section>
              <Progress completed={completed} />
            </section>
            <footer>
              <h4>Добро пожаловать в головомку "Art Dealer Quiz".</h4>
              Из выбранных двух картин, Вам необходимо выбрать ту, которая по Вашему мнению стоит больше.
              За {this.state.app.TOTAL} Вы получите приз (:
              <h4>Для чего это нужно?</h4>
              - Вы узнаете не только известные картины, а так же почувствуете себя в непростой роли оценщика.
            </footer>
          </div>
          );
      } else {
          return (
          <div className="main-wrapper">
            <header>
              <h1>Art Dealer Quiz</h1>
            </header>
            <section className="main-content">
              <h3>Поздравляем Вас с победой!</h3>
              Теперь Вы можете поделиться своим достижением с друзьями.
            </section>
            <section>
              <Progress completed={completed} />
            </section>
            <footer>
              <h4>Добро пожаловать в головомку "Art Dealer Quiz".</h4>
              Из выбранных двух картин, Вам необходимо выбрать ту, которая по Вашему мнению стоит больше.
              За {this.state.app.TOTAL} Вы получите приз (:
              <h4>Для чего это нужно?</h4>
              - Вы узнаете не только известные картины, а так же почувствуете себя в непростой роли оценщика.
            </footer>
          </div>
          );
      }
    }
});

React.render(<ClientApp />, document.getElementById('content')); // jshint ignore:line

module.exports = ClientApp;
