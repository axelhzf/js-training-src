var expect = require('chai').expect;
var request = require('request');
var phantom = require('node-phantom');
var app = require('../../app.js');

describe("index", function () {

    describe("page", function (done) {
        var ph;

        before(function (done) {
            phantom.create(function (err, _ph) {
                ph = _ph;

                ph.addCookie({
                    'name':     'connect.sess',
                    'value':    's%3Aj%3A%7B%22username%22%3A%22user1%22%2C%22flash%22%3A%7B%22info%22%3A%5B%22welcome%20user1%22%5D%7D%7D.hv5tYPteWCgAl1uSG02vDSy6TEYcviBs2oN29pvN3IY',
                    'domain':   'localhost'
                });

                done();
            });
        });

        after(function () {
            ph.exit();
        });

        it("should contains a title with the username", function (done) {
            ph.createPage(function (err, page) {
                page.open("http://localhost:3000", function (err, status) {
                    page.evaluate(function () {
                        var result = {};
                        result.title = $(".welcome-username").text();
                        return result;
                    }, function (err, result) {
                        expect(result.title).to.equal("Welcome to user1");
                        done();
                    });
                });
            });
        });

    });


});