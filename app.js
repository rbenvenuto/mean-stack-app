var express = require('express');
var app = express();
var path = require('path');

app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'public')));

// Rotas
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