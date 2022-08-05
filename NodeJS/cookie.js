//Cookies are small data that are stored on a client side and sent to the client along with server requests. Cookies have various functionality, they can be used for maintaining sessions and adding user-specific features in your web app. For this, we will use cookie-parser module of npm which provides middleware for parsing of cookies.

let express = require("express");
let cookieParser = require("cookie-parser");
//setup express app
let app = express();

app.use(cookieParser());

//basic route for homepage
app.get("/", (req, res) => {
  res.send("welcome to express app");
});

//JSON object to be added to cookie
let users = {
  name: "Ritik",
  Age: "18",
};

//Route for adding cookie
app.get("/setuser", (req, res) => {
  res.cookie("userData", users);
  res.send("user data added to cookie");
});

function validateCookie(req, res, next) {
  const { cookies } = req;
  if ("userData" in cookies) {
    console.log("name is exist");
    if (cookies.userData.name == "Ritik") {
      next();
    } else {
      res.status(403).send({ msg: "Not Authenticated", cookies });
    }
  } else {
    res.status(403).send({ msg: "name Not Authenticated", cookies });
  }
}
//Iterate users data from cookie
app.get("/getuser", validateCookie, (req, res) => {
  //shows all the cookies
  res.send(req.cookies);
});

//server listens to port 3000
app.listen(3000, (err) => {
  if (err) throw err;
  console.log("listening on port 3000");
});
