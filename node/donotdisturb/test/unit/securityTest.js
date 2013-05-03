var expect = require('chai').expect;
var sinon = require('sinon');
var security = require('../../app/security')

describe("security", function () {

    var request, response, next;

    beforeEach(function () {
        request = {
            session : {}
        };
        response = {
            redirect : sinon.spy()
        }
        next = sinon.spy();
    });

    it("should redirect to login if not session", function () {
        security(request, response, next);
        expect(response.redirect.calledWith("/login")).to.be.true;
        expect(next.called).to.be.false;
    });

    it("should continue the chain if there is a session", function () {
        request.session.username = 'superman';
        security(request, response, next);
        expect(response.redirect.called).to.be.false;
        expect(next.called).to.be.true;
    });

});