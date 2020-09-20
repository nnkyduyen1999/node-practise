const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const db = require('./db');

const userRoutes = require('./routes/route.user');
const port = 3000;


app.get('/', async (req, res) => {
    res.render('index', {
        name: "AAA"
    });
});

app.use('/users', userRoutes);
app.listen(port, () => console.log('Server listening on port ' + port));