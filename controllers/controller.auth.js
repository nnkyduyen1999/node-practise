const db = require('../db');

module.exports.login = (req, res) => {
    res.render('./auth/login');
};

module.exports.postLogin = (req, res) => {
    const foundedUser = db.get('users').find({'email': req.body.email}).value();
    if(!foundedUser) {
        res.render('./auth/login', {
            errors: ["User not found"],
            info: req.body
        });
        return;
    }
    if(foundedUser.password !== req.body.password) {
        res.render('./auth/login', {
            errors: ["Password incorrect"],
            info: req.body
        });
        return;
    }
    res.cookie('user-cookie', foundedUser.id);
    res.redirect('/users');
};