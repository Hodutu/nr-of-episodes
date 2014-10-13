'use strict';

var assert = require('assert');
var noe = require('../');

// Search by title
noe('Modern Family', function(episodes) {
  assert(episodes, 126);
});
