$.getJSON("http://embed.chrisbutler.me/twitter", function(data) {
  var data = data[0];
  var tweet = '<div class="user"><a href="https://twitter.com/realchrisbutler" aria-label="Chris Butler (screen name: realchrisbutler)" data-scribe="element:user_link" target="_blank"> <img alt="" src="';
  tweet += data.user.profile_image_url;
  tweet += '" data-scribe="element:avatar"><span><span data-scribe="element:name">Chris Butler</span></span><span data-scribe="element:screen_name">@realchrisbutler</span></a></div><p class="tweet">';
  tweet += data.text;
  tweet += '</p><p class="timePosted"><a target="_blank" href="https://twitter.com/realchrisbutler/status/';
  tweet += data.id_str;
  tweet += '">Posted on ';
  tweet += String(new Date(data.created_at).toLocaleDateString());
  tweet += '</a></p>';
  $('#tweets').html(tweet);
});
