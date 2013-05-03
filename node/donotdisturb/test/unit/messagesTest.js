var expect = require('chai').expect;
var sinon = require('sinon');
var messages = require('../../app/messages.js')

describe("messages", function () {

    it("should transform the flash messages", function () {
        var next = sinon.spy();
        var req = {
            flash : function () {
                return {"info" : ["info1", "info2"], "error" : ["error1"]};
            }
        };
        var res = {
            locals : {}
        };
        messages(req, res, next)
        expect(next.called).to.be.true;
        expect(res.locals.messages()).to.deep.equal(
            [
                {type: 'info', text : "info1"},
                {type: 'info', text : "info2"},
                {type: 'error', text : "error1"}
            ]
        );
    });

});