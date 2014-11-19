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

    console.log(infobox.num_episodes);

    var episodes = infobox.num_episodes.filter(function(element) {
      var parsed = parseInt(element.value, 10);
      return element.type === 'text' &&
        typeof parsed === 'number' &&
        !Number.isNaN(parsed);
    });

    cb(err, parseInt(episodes[0].value, 10));
  });
};


noe('MacGyver', function(err, episodes) {
  if (err){
    console.log(err);
    return;
  }

  console.log(episodes);
});

module.exports = noe;
