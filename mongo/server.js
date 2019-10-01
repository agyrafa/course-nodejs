const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
	
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://luis:Luis1234@cluster0-shard-00-00-4tgeh.mongodb.net:27017,cluster0-shard-00-01-4tgeh.mongodb.net:27017,cluster0-shard-00-02-4tgeh.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority');
const userSchema = new mongoose.Schema({
    nome: String,
    email: String,
    idade: Number
}, { collection: 'user' }
);

app.get('/', (req, res) => {
    const User = mongoose.model('user', userSchema, 'user');

    User.find({}).lean().exec((e, users) => {
        res.json(users);
        res.end();
    });
});

app.post('/user', function (req, res, next) {

});

app.listen(3001);