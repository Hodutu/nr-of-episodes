# nr-of-episodes by [@michalbe](http://github.com/michalbe) #
Number of episodes of the given TV Show

### What? ###
This package returns number of episodes of the given TV Show that have already been aired. It uses Wikipedia data and tries to be as smart as possible, so when asked for "Wire" it checks also "Wire (TV serie)", "The Wire" and "The Wire (TV serie)" pages.

### How to use: ###
```
npm install nr-of-episodes
```

then:
```javascript
var noe = require('nr-of-episodes');

noe('breaking bad', function(error, data){
  console.log(data); // 62
});
```
