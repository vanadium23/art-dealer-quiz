'use strict';

var Reflux = require('reflux');
var Actions = require('actions/GameActionCreators');
var Paintings = require('stores/database');
var _ = require('underscore');

var GameStore = Reflux.createStore({
    listenables: Actions,
    init: function () {
        this.game = {
            TOTAL: 10,
            wins: 0,
            quiz: this.grabPair(),
        };

        this.listenTo(Actions.choosePainting, this.gameChoose);
        this.listenTo(Actions.generateQuiz, this.generateQuiz);
    },
    gameChoose: function (choosenIndex) {
        _.each(this.game.quiz, function (obj) {
            obj.choosen = true;
            obj.description = obj.price;
        });
        var maxObj = _.max(this.game.quiz, function (obj) {
            return obj.price;
        });
        var maxIndex = this.game.quiz.indexOf(maxObj);
        this.game.status = {
            correct: maxIndex === parseInt(choosenIndex, 10),
            mark: maxIndex
        };
        if (this.game.status.correct) {
            this.game.wins++;
        } else {
            this.game.wins = 0;
        }
        if (this.game.wins > this.game.TOTAL) {
            this.game.complete = true;
        } else {
            setTimeout(Actions.generateQuiz, 3000);
        }
        this.trigger(this.game);
    },
    grabPair: function() {
        return _.shuffle(Paintings).splice(0, 2);
    },
    generateQuiz: function() {
        this.game.quiz = this.grabPair();
        _.each(this.game.quiz, function(obj) {
            obj.choosen = false;
        });
        this.game.status = undefined;
        this.trigger(this.game);
    }
});

module.exports = GameStore;
