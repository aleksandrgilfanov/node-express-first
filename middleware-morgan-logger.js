// Require the stuff we need
var express = require("express");
var http = require("http");
var logger = require("morgan");

// Build the app
var app = express();

// Logging middleware
app.use(logger());

// Add some middleware
app.use(function(request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });

  var answer = "";
  answer += "Request URL: " + request.url + "\n";
  answer += "Request type: " + request.method + "\n";
  answer += "Request headers: " + JSON.stringify(request.headers) + "\n";
  response.write(answer);

  response.end("\nHello world!\n");
});



// Start it up!
http.createServer(app).listen(1337);