var expect = require("chai").expect;
var nodeFs = require("./node-fs");
var _ = require("underscore");

describe("node-fs", function () {
  it("should return files and size from current directory", function (done) {
    nodeFs.getFileSizes(".", function (err, result) {
      expect(_.pluck(result, "file")).to.eql(["package.json", "node-fs.spec.js", "node-fs.js"]);

      _.pluck(result, "size").forEach(function (size) {
        expect(size).to.be.at.least(1);
      });

      done();
    });
  });
});