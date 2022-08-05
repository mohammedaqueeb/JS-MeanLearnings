// with help or url we get all url related details

const url = require("url");

const urlLink = "https://locahost:5050/node?year=2020&month=02";

var urlObj = url.parse(urlLink);

console.log(urlObj.port);
console.log(urlObj.pathname);
console.log(urlObj.query);
