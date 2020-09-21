const db = require('../db');
const numOfValInDb = db.get('users').size().value();

module.exports.index = async (req,res) => {
    res.render('./users/index', {
        users: db.get('users').value(),
    })
};

module.exports.search = async (req, res) => {
    var query = req.query.q.toLowerCase();
    const users = db.get('users').value();
    var matchedUser = users.filter(user => user.name.toLowerCase().indexOf(query) !== -1);
    res.render('./users/index', {
        searchKey: query,
        users: matchedUser
    });
};

module.exports.create = async (req, res) => {
    res.render('./users/create');
};

module.exports.postCreate = async (req, res) => {
    req.body.id = numOfValInDb + 1;
    db.get('users').push(req.body).write();
    res.redirect('/users');
};

module.exports.detail = async (req,res) => {
    const foundedUser = db.get('users').find({ id: parseInt(req.params.id)}).value();
    res.render('./users/detail', {
        detail: foundedUser,
    });
};