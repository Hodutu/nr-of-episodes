'use strict';

var wi = require('wiki-infobox');
var wikiPages = require('./wiki-pages.json');

var noe = function(title, cb) {

  if (title in wikiPages) {
    title = wikiPages[title];
  }

  wi(title, 'en', function(err, infobox) {
    if (
      (err && title.indexOf('series') === -1) ||
      (infobox && typeof infobox.num_episodes === 'undefined')
    ) {
      // There's an error but we didn't add 'TV SERIES' to the title
      noe(title + ' (TV series)', cb);
      return;
    } else if (err) {
      cb(new Error('No episodes found :('));
      return;
    }

    var episodes = infobox.num_episodes;

    if (Array.isArray(infobox.num_episodes)) {
      episodes = infobox.num_episodes.filter(function(element) {
        var parsed = parseInt(element.value, 10);

        return element.type === 'text' &&
          typeof parsed === 'number' &&
          !Number.isNaN(parsed);
      }).pop();
    }

    episodes = episodes && episodes.value ? parseInt(episodes.value, 10) : 0;
    cb(err, episodes);
  });
};

module.exports = noe;
