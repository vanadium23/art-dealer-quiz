'use strict';

var Reflux = require('reflux');

var GameActionCreators  =  Reflux.createActions([
    "choosePainting",
    "generateQuiz",
    "gameChangeState",
    "gameWin"
    ]);


module.exports = GameActionCreators;
