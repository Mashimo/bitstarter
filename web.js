var express = require('express');
var fs = require ('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buf = new Buffer(256);
  var content = fs.readFileSync("index.html");
  var str = content.toString();
  response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
