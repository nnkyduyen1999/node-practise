const db = require('../db');

module.exports.requireAuth = (req, res, next) => {
    console.log(req.headers.cookie);
     console.log(req.cookies);

     if(!req.headers.cookie) {
        res.redirect('/auth/login');
        return;
     }
     res.locals.loggedUser = "Abc";
     next();
};