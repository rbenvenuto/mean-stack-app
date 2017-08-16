var express = require('express');
var app = express();
var path = require('path');

app.set('port', 3000);

// Essas são as rotas da aplicação

// Rota raíz

/* 
 *   .sendFile vai juntar todos os argumentos
 *   e retornar o caminho completo
 */
app.get('/', function(req, res) {
    console.log('GET nessa porra');
    res
        .status(200)
        .sendFile(path.join(__dirname, 'public', 'index.html'));
});

/* Rota /json */
app.get('/json', function(req, res) {
    console.log('GET /json');
    res
        .status(200)
        .json({ "jsonData": true });
});

var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log('escutando porta ' + port);
});