//Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).

//  To include the HTTP module, use the require() method:

var http = require("http");

//The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.

//create a server object:
http
  .createServer(function (req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080

//The function passed into the http.createServer() method, will be executed when someone tries to access the computer on port 8080.

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello World!");
    res.end();
  })
  .listen(8081);
