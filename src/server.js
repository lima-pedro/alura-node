const http = require('http');
const port = 3000;

const routes = {
    '/': 'Página inicial',
    '/autores': 'Autores',
    '/editoras': 'Editoras',
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text-plain'});
    res.end(routes[req.url]);
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})