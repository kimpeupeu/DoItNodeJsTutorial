var http = require('http');

var server = http.createServer();

var port = 3000;
server.listen(port, function() {
    console.log('Web Server is started : %d', port);
});

server.on('connection', function(socket) {
    var addr = socket.address();
    console.log('Client is connected : %s, %d', addr.address, addr.port);
});

server.on('request', function(req, res) {
    console.log('Client send request');
    console.dir(req);
});

server.on('close', function() {
    console.log('Server is closed');
});