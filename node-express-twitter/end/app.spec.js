var request = require("request");
var app = require("./app");
var expect = require("chai").expect;

var baseUrl = "http://localhost:3000";
var twitterApiClient = {
  findAll: function (cb) {
    return request.get({uri: baseUrl + "/tweets", json: true}, cb);
  },
  get: function (id, cb) {
    return request.get({uri: baseUrl + "/tweets/" + id, json: true}, cb);
  },
  post: function (tweet, cb) {
    return request.post({
      uri: baseUrl + "/tweets",
      json: tweet
    }, cb);
  },
  search: function (query, cb) {
    return request.get({
      uri: baseUrl + "/search",
      qs: {q: query},
      json: true
    }, cb);
  }
};

describe("app", function () {

  before(function (done) {
    app.start(done);
  });

  after(function () {
    app.stop();
  });

  beforeEach(function () {
    app.database = [
      {id: 1, text: "Hola mundo"},
      {id: 2, text: "Hello world"},
      {id: 3, text: "Hello from js-training"}
    ];
  });

  describe("GET /tweets", function () {
    it("should return all tweets in reverse order", function (done) {
      twitterApiClient.findAll(function (err, response, body) {
        expect(body).to.eql([
          {id: 3, text: "Hello from js-training"},
          {id: 2, text: "Hello world"},
          {id: 1, text: "Hola mundo"}
        ]);
        done();
      });
    });
  });

  describe("POST /tweets", function () {
    it("should create a new tweet", function (done) {
      var tweet = {text: "hola"};
      twitterApiClient.post(tweet, function (err, response, body) {
        expect(body).to.eql({id: 4, text: tweet.text});
        expect(app.database.length).to.equal(4);
        done();
      });
    });
  });

  describe("GET /tweets/:id", function () {
    it("should return a tweet by id", function (done) {
      twitterApiClient.get(1, function (err, response, body) {
        expect(body).to.eql({id: 1, text: "Hola mundo"});
        done();
      });
    });
  });

  describe("GET /search?q=query", function () {
    it("should return tweets that match the query", function (done) {
      twitterApiClient.search("Hello", function (err, response, body) {
        expect(body).to.eql([
          {id: 3, text: "Hello from js-training"},
          {id: 2, text: "Hello world"}
        ]);
        done();
      });
    });
  });

});