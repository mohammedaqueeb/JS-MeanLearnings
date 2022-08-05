// Error Handling

//Error Handling refers to how Express catches and processes errors that occur both synchronously and asynchronously. Express comes with a default error handler so you don’t need to write your own to get started.

let express = require("express");
let app = express();

app.use("/users", (req, res, next) => {
  console.log("users");
});

//creating a middleware filter will go thorough all request and create error if any operation failed
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

// if any operations failed this middleware will handle error will return error
// we are creating 500 error
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

//server listens to port 3000
app.listen(3000, (err) => {
  if (err) throw err;
  console.log("listening on port 3000");
});
