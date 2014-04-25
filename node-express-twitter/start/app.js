var express = require('express');
var _ = require("underscore");
var app = express();

exports.database = [];



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