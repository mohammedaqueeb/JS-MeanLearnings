//A REST API (also known as RESTful API) is an application programming interface (API or web API) that conforms to the constraints of REST architectural style and allows for interaction with RESTful web services. REST stands for representational state transfer and was created by computer scientist Roy Fielding.

//An API is a set of definitions and protocols for building and integrating application software. It’s sometimes referred to as a contract between an information provider and an information user—establishing the content required from the consumer (the call) and the content required by the producer (the response).

var express = require("express");
var app = express();
var fs = require("fs");
const cors = require("cors");

app.use(cors());

app.get("/listUsers", function (req, res) {
  fs.readFile(__dirname + "/" + "users.json", "utf8", function (err, data) {
    console.log(data);
    res.end(data);
  });
});

app.get("/listUsers/:id/:name", function (req, res) {
  res.send(req.params);
});

app.get("/listUsers?sortBY=name", function (req, res) {
  res.send(req.query);
});

app.post("/addUser", function (req, res) {
  const user = {
    id: req.body.id,
    name: req.body.name,
  };
  res.send(user);
});

app.put("/updateUser/:id", function (req, res) {
  res.send(req.params.id);
});

app.delete("/deleteUser/:id", function (req, res) {
  res.send(req.params.id);
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
