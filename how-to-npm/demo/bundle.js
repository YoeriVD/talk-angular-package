(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
var timer = require("@yoerivd/timer-as-promise").default;

let text = document.getElementsByTagName('textarea')[0];
text.innerHTML = 'starting timer\n';
function printStuff(){
    text.innerHTML += 'hello people!'
}




timer(2000).then(printStuff);



},{"@yoerivd/timer-as-promise":2}],2:[function(require,module,exports){
exports.default = function(milliseconds){
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}
},{}]},{},[1]);
