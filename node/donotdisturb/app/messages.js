var _ = require('underscore');

var messages = function (req, res, next) {

    res.locals.messages = function () {
        var flash = req.flash() || {};

        var allMessages = [];
        _.each(flash, function (messages, type) {
            _.each(messages, function (message) {
                allMessages.push({type : type, text : message});
            })
        });

        return allMessages;
    }

    next();
}

module.exports = messages;