// Server Side JS

// Create our webserver application:
// 1. get the express library
var express = require("express");

// 2. get the http libraries
var http = require("http");

// 3. get the path library
var path = require("path");

// 4. use the express function to create all the functionality (app) you need to run the web part of the server
var app = express();

// 5. connect the web server to the network
var server = http.createServer(app);

// 6. find the right directory for your website files
app.use(express.static(path.join(__dirname, "../")));

// 7. tell the server to give us the webpage
// a. set up the function
var returnRoot = function(request, response) {
  console.log("got a request from someone");
  // response.sendFile("scott.html");

  // response.send("happy");
  response.sendFile("index.html");
};
// ROUTES
// b. run the function
app.get("/",returnRoot);

// IN CLASS EXAMPLE ON 1/30:
// var imageArray = [
//   {url: "bread.jpg", description: "bread"},
//   {url: "burrito.jpg", description: "burrito"},
//   {url: "nicolascage.gif", description: "Nicolas Cage"},
//   {url: "pizza.jpg", description: "pizza"}
// ];

// app.get("/v1/images", function(request, response){
//   // tell the browser it's receiving JSON
//   response.set("Content-Type", "application/json");
//   // send the images back
//   response.send(imageArray);
// })


// 7. go! tell the server to listen to the right port
server.listen(9001, function(){
  console.log("Server is ready...");
});
