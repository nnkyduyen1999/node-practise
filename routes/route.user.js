const express = require('express');
const db = require('../db');
const numOfValInDb = db.get('users').size().value();

const router = express.Router();

router.get('/', async (req,res) => {
    res.render('./users/index', {
        users: db.get('users').value(),
    })
});

router.get('/search', async (req, res) => {
    var query = req.query.q.toLowerCase();
    const users = db.get('users').value();
    var matchedUser = users.filter(user => user.name.toLowerCase().indexOf(query) !== -1);
    res.render('./users/index', {
        searchKey: query,
        users: matchedUser
    });
});

router.get('/create', async (req, res) => {
    res.render('./users/create');
});

router.post('/create', async (req, res) => {
    req.body.id = numOfValInDb + 1;
    db.get('users').push(req.body).write();
    res.redirect('/users');
});

router.get('/:id', async (req,res) => {
    const foundedUser = db.get('users').find({ id: parseInt(req.params.id)}).value();
    res.render('./users/detail', {
        detail: foundedUser,
    });
});

module.exports = router;
