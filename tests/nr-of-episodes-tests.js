'use strict';

//var assert = require('assert');
var noe = require('../');

var list = require('../../tv-series/data/data.js'); //[{title: 'Banshee'}];

list.forEach(function(show){
  noe(show.title, function(e, d){
    console.log(show.title + ' episodes: ' + d);
  });
});
