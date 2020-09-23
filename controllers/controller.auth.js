const db = require('../db');
const md5 = require('md5');

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
    const hashedPassword = md5(req.body.password);

    if(foundedUser.password !== hashedPassword) {
        res.render('./auth/login', {
            errors: ["Password incorrect"],
            info: req.body
        });
        return;
    }

    res.cookie('user-cookie', foundedUser.id);
    res.redirect('/users');
};