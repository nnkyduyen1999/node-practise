const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const port = 3000;
var users = [
    { id: "1", name: "Duyên"},
    { id: "2", name: "Qui"}
 ];



app.get('/', async (req, res) => {
    res.render('index', {
        name: "AAA"
    });
});

app.get('/users', async (req,res) => {
    res.render('./users/index', {
        users: users
    })
});

app.get('/users/search', async (req, res) => {
    var query = req.query.q.toLowerCase();
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
    res.send(req.body);
})

app.listen(port, () => console.log('Server listening on port ' + port));