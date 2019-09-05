const http = require('http');
const host = '127.0.0.1';
const port = 3000;

const server = http.createServer(
    (req, res) => {
        res.writeHead(200, {'Content-type' : 'text/html;charset=utf'});

        res.end('<h1>Hello Word</h1>');
    }
);

server.listen(port, host, () =>{
    console.log('servidor rodando em http://' + host + ':' + port);
});