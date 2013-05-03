var security = require("./security");

var index = function (app) {

    app.get("/", security, function (req, res) {
        res.render('index', {title: "Index", username : req.session.username});
    });

};

module.exports = index;