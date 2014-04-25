var fs = require("fs");
var path = require("path");
var _ = require("underscore");
var async = require("async");

exports.getFileSizes = function (directory, cb) {

  async.waterfall([
    _.partial(fs.readdir, directory),
    getFilesSize,
    sortByFilename
  ], function (err, result) {
    cb(err, result);
  });

  function getFilesSize(files, cb) {
    async.map(files, getFileSize, cb);
  }

  function getFileSize(file, cb) {
    fs.stat(path.join(directory, file), function (err, stat) {
      if (err) return cb(err);
      if (!stat.isDirectory()) {
        cb(null, {file: file, size: stat.size});
      } else {
        cb()
      }
    });
  }

  function sortByFilename(files, cb) {
    cb(null, _.sortBy(_.compact(files), "file"));
  }

};


