//Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.

//These functions are used to modify req and res objects for tasks like parsing request bodies, adding response headers, etc.

// a middle ware is part where we filter the request like Authorization, onther example is images upload filter and many more..

// // Execute any code.
// Make changes to the request and the response objects.
// End the request-response cycle.
// Call the next middleware in the stack.

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});
