'use strict';

var wi = require('wiki-infobox');

var reqTry = 0;
var noe = function(title, cb) {
  reqTry++;
  wi(title, 'en', function(err, infobox) {
    if (!infobox && title.indexOf('series') === -1) {
      cb(new Error('No Episodes found :('));
      return;
    }
    cb(err, infobox.num_episodes);
  });
};

var shows = [
  {
    title: 'Modern Family',
    episodes: 126
  },
  {
    title: 'Dollhouse',
    episodes: 26
  }
];

var nr = 1;

noe(shows[nr].title, function(err, episodes) {
  if (err){
    console.log(err);
    return;
  }

  console.log(episodes);
});

module.exports = noe;
