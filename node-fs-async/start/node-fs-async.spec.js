var expect = require("chai").expect;
var nodeFs = require("./node-fs-async");
var _ = require("underscore");

describe("node-fs-async", function () {
  it("should return files and size from current directory", function (done) {
    nodeFs.getFileSizes(".", function (err, result) {

      expect(_.pluck(result, "file")).to.eql(["node-fs-async.js", "node-fs-async.spec.js", "package.json"]);

      _.pluck(result, "size").forEach(function (size) {
        expect(size).to.be.at.least(1);
      });

      done();
    });
  });
});