// var cb = {
//   "id": '19496635',
//   "domId": 'tweets',
//   "maxTweets": 1,
//   "enableLinks": true
// };

var cb = {
  "id": '610645340434239489',
  "domId": 'tweets',
  "maxTweets": 1,
  "enableLinks": true,
  "showUser": true,
  "showTime": true,
  "dateFunction": '',
  "showRetweet": false,
  "customCallback": handleTweets,
  "showInteraction": false
};

function handleTweets(tweets){
    var x = tweets.length;
    var n = 0;
    var element = document.getElementById('tweets');
    var html = '<ul>';
    while(n < x) {
      html += '<li>' + tweets[n] + '</li>';
      n++;
    }
    html += '</ul>';
    element.innerHTML = html;
}

twitterFetcher.fetch(cb);
