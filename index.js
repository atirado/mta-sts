var static = require('node-static');
var http = require('http');

var file = new(static.Server)();

const port = process.env.PORT || 443;

http.createServer(function (req, res) {
  file.serve(req, res);
}).listen(port);