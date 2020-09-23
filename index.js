const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const db = require('./db');

const userRoutes = require('./routes/route.user');
const authRoutes = require('./routes/route.auth');
const port = 3000;

app.use(express.static('public')); //for using static files

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const authMiddleware = require('./middlewares/auth.middleware');

app.get('/', async (req, res) => {
    res.render('index', {
        name: "AAA"
    });
});

app.use('/users',authMiddleware.requireAuth, userRoutes);
app.use('/auth', authRoutes);
app.listen(port, () => console.log('Server listening on port ' + port));