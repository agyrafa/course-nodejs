const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello from the outside 2</h1>');
    // console.log(req);
    // console.log(res);
})

app.listen(3000);