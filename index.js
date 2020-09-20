const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapters = new FileSync('db.json');
db = lowdb(adapters);

db.defaults({users: []}).write();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const port = 3000;

app.get('/', async (req, res) => {
    res.render('index', {
        name: "AAA"
    });
});

app.get('/users', async (req,res) => {
    res.render('./users/index', {
        users: db.get('users').value(),
    })
});

app.get('/users/search', async (req, res) => {
    var query = req.query.q.toLowerCase();
    const users = db.get('users').value();
    var matchedUser = users.filter(user => user.name.toLowerCase().indexOf(query) !== -1);
    res.render('./users/index', {
        searchKey: query,
        users: matchedUser
    });
});

app.get('/users/create', async (req, res) => {
    res.render('./users/create');
});

app.post('/users/create', async (req, res) => {
    db.get('users').push(req.body).write();
    // console.log(users);
    res.redirect('/users');
});

app.listen(port, () => console.log('Server listening on port ' + port));