var express = require('express');
var _ = require("underscore");
var app = express();

exports.database = [];

app.use(express.bodyParser());

app.get("/tweets", function (req, res) {
  var sortedTweets = _.sortBy(exports.database, "id").reverse();
  res.json(sortedTweets);
});

app.get("/tweets/:tweetId", function (req, res) {
  var tweetId = parseInt(req.param("tweetId"), 10);
  var tweet = _.findWhere(exports.database, {id: tweetId});
  if (tweet) {
    res.json(tweet);
  } else {
    res.send(404);
  }
});

app.post("/tweets", function (req, res) {
  var tweet = req.body;
  tweet.id = exports.database.length + 1;
  exports.database.push(tweet);
  res.json(tweet);
});

app.get("/search", function (req, res) {
  var q = req.param("q");
  var selectedTweets = _.filter(exports.database, function (tweet) {
    return tweet.text.indexOf(q) !== -1;
  });
  res.json(_.sortBy(selectedTweets, "id").reverse());
});

var server;
exports.start = function (cb) {
  server = app.listen(3000, cb);
};

exports.stop = function () {
  server.close();
};

if (require.main === module) {
  module.exports.start()
}