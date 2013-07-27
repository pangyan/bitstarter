var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
// app.use(express.logger());

app.get('/', function(request, response) {
  var body = fs.readFileSync('./index.html', 'utf-8');
  response.send(body);
  // response.send('Hello World 2!');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
