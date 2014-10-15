'use strict';

//var assert = require('assert');
var noe = require('../');

var list = [{title: 'Banshee'}];//require('../../tv-series/data/data.js');

list.forEach(function(show){
  noe(show.title, function(e, d){
    console.log(show.title + ' episodes: ' + d);
  });
});
