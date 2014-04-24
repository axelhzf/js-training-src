var fs = require("fs");
var path = require("path");
var _ = require("underscore");

exports.getFileSizes = function (directory, cb) {
  fs.readdir(directory, function (err, files) {
    if (err) return cb(err);
    var result = [];

    function readFileSize () {
      if (files.length === 0) {
        result = _.sortBy(result, "name");
        cb(err, result);
        return;
      }
      var file = files.pop();
      fs.stat(path.join(directory, file), function (err, stat) {
        if (err) return cb(err);
        if (stat.isFile()) {
          result.push({file: file, size: stat.size});
        }
        readFileSize();
      });
    }

    readFileSize();

  });
};


