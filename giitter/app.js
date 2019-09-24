const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();

app.use(session({secret: '123456', saveUninitialized: true, resave: true}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const postsRouter = require('./routes/posts');

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/posts', postsRouter);

app.listen(3000);