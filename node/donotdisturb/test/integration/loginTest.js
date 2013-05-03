var expect = require('chai').expect;
var request = require('request');

var phantom = require('node-phantom');

var app = require('../../app.js');

describe("login", function () {

    it("should redirect to login page", function (done) {
        var options = {
            url : 'http://localhost:3000',
            followRedirect : false
        };

        request(options, function (error, response, body) {
            expect(response.statusCode).to.equal(302);
            expect(response.headers.location).to.equal("/login");
            done();
        });
    });

    it("should redirect to / if credentials are ok", function (done) {
        var options = {
            url : 'http://localhost:3000/login',
            followRedirect : false,
            form : {username : "user1", password : "user1"}
        };

        request.post(options, function (error, response, body) {
            expect(response.statusCode).to.equal(302);
            expect(response.headers.location).to.equal("/");
            expect(response.headers['set-cookie'][0]).to.have.string('connect.sess');
            done();
        });
    });

    describe("page", function (done) {
        var ph;

        before(function (done) {
            phantom.create(function (err, _ph) {
                ph = _ph;
                done();
            });
        });

        after(function () {
            ph.exit();
        });

        it("should contains form with username & password", function (done) {
            ph.createPage(function (err, page) {
                page.open("http://localhost:3000/login", function (err, status) {
                    page.evaluate(function () {
                        var result = {};
                        result.hasUsernameInput = $('input[name="username"]').length > 0;
                        result.hasPasswordInput = $('input[name="password"]').length > 0;
                        return result;
                    }, function (err, result) {
                        expect(result.hasUsernameInput).to.be.true;
                        expect(result.hasPasswordInput).to.be.true;
                        done();
                    });
                });
            });
        });

    });

});

