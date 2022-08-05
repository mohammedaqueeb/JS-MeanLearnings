//File system also know as fs in node and its core mmodule of node is used access files of operating system machine

//Node.js includes fs module to access physical file system. The fs module is responsible for all the asynchronous or synchronous file I/O operations.

var fs = require("fs");

// read file
fs.readFile("app.txt", "utf8", (err, data) => {
  console.log(data);
});

const data = "this is sample text for undertanding Filesystem in nodes.Js";

// write file it will overright the file
fs.writeFile("app.txt", data, () => {
  console.log("updating File");
});

// appendFile it will append text in last
fs.appendFile("app.txt", data, () => {
  console.log("updating File");
});
