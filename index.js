'use strict';

var wi = require('wiki-infobox');

var reqTry = 0;
var noe = function(title, cb) {
  reqTry++;
  wi(title, 'en', function(err, infobox) {
    if (err && title.indexOf('series') === -1) {
      // There's an error but we didn't add 'TV SERIES' to the title
      noe(title + ' (TV series)', cb);
      return;
    } else if (err) {
      cb(new Error('No episodes found :('));
      return;
    }

    cb(err, parseInt(infobox.num_episodes, 10));
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
