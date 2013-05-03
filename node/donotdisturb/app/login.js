var security = require("./security.js");

var login = function (app) {

    app.get("/login", function (req, res) {
        res.render('login', { title : 'Login' });
    });

    app.post('/login', function (req, res) {
        var username = req.body.username;
        var password = req.body.password;
        if (username === 'user1' && password === 'user1') {
            req.session = {'username' : username};
            req.flash("info", "welcome " + username);
            res.redirect("/");
        } else {
            req.flash('error', 'Invalid user or password');
            res.redirect("/login");
        }
    });

    app.get('/logout', function (req, res) {
        req.session.username = null;
        req.flash("warning", "You are logged out");
        res.redirect('/');
    });

};

module.exports = login;


