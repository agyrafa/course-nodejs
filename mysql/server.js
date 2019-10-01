const bodyParser = require('body-parser');
const express = require('express');
const db = require('./db');


const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', async (req, res) => {

    try {
        const users = await db.query('SELECT * FROM user');

        res.jsonp(users);
    } catch (err) {
        res.jsonp(err);
    }

});

app.post('/user', async (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;

    const mySQLQuery = `
        INSERT INTO user(nome, email)
        VALUES('${nome}','${email}')
    `;

    try {
        const user = await db.query(mySQLQuery);
        res.jsonp(user);
    } catch (err) {
        res.status(500).jsonp(err);
    };
});

app.put('/user/:id', async (req, res) => {
    const id = req.params.id;
    const nome = req.body.nome;
    const email = req.body.email;

    const mySQLQuery = `
        UPDATE set 
            nome = ${nome}', 
            email = '${email}'
        WHERE id = ${id}
    `;

    try {
        const user = await db.query(mySQLQuery);
        res.jsonp(user);
    } catch (err) {
        res.status(500).jsonp(err);
    };
});


app.listen(3030);