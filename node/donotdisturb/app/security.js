var security = function (req, res, next) {
    if(!req.session.username) {
        res.redirect("/login");
    }else {
        next();
    }
};

module.exports = security;