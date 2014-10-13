'use strict';

var wi = require('wiki-infobox');
var assert = require('assert');

var noe = function(title, cb) {
  cb(0);
  wi();
};

noe('Modern Family', function(episodes) {
  assert(episodes, 126);
});

module.exports = noe;
