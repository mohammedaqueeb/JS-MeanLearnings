//JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.

//token is a string of data that represents something else, such as an identity. In the case of authentication, a non-JWT based token is a string of characters that allow the receiver to validate the sender’s identity. The important distinction here is lack of meaning within the characters themselves.

// npm install jsonwebtoken

const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.get("/api", (req, res) => {
  res.json({
    message: "Welcome",
  });
});

app.post("/api/login", (req, res) => {
  //mock User
  const user = {
    id: 1,
    username: "aqueeb",
    email: "aqueeb@gmail.com",
  };
  jwt.sign({ user: user }, "secretKey", (err, token) => {
    res.json({ token });
  });
});

//verify token
function verifyToken(req, res, next) {
  //get auth header value

  //Format of token
  //Authorization : Bearer <access_token>
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    //Split at the space separate Bearer <access_token>
    const bearer = bearerHeader.split(" ");
    //get token from array
    const bearerToken = bearer[1];
    //set the token
    req.token = bearerToken;
    //next middleware
    next();
  } else {
    //forbidden
    res.sendStatus(403);
  }
}

app.post("/api/dashboard", verifyToken, (req, res) => {
  jwt.verify(req.token, "secretKey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: "verify token",
        authData,
      });
    }
  });
  //mock User
});

app.listen(8081, () => {
  console.log("server started");
});
