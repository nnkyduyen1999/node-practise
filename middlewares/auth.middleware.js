const db = require('../db');

module.exports.requireAuth = (req, res, next) => {
     if(!req.headers.cookie) {
        res.redirect('/auth/login');
        return;
     }

    //  const findUser = db.get('users').find({id: req.headers.cookie}).value();
    //  if(!findUser) {
    //      res.redirect('/auth/login');
    //      return;
    //  }
     next();
    
};