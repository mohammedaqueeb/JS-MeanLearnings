const EventEmiter = require("events");

const emitter = new EventEmiter();

emitter.on("messageLogged", () => {
  console.log("messageLogged");
});

//making a noise , produce something
emitter.emit("messageLogged");
