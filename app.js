var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.sendfile('./views/index.html');
});
 
app.get('/about', function(req, res) {
    res.sendfile('./views/about.html');
});

app.get('/api', function(request, response) {
    response.send({name:"Raymond",age:40});
});

app.get('/hello', function(req, res){
  res.send('Hello World');
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});