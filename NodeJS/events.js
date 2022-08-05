//Every action on a computer is an event. Like when a connection is made or a file is opened.
//Node.js has a built-in module, called "Events", where you can create-, fire-, and listen for- your own events.

//Node.js has ‘events’ module which emits named events that can cause corresponding functions or callbacks to be called. Functions(Callbacks) listen or subscribe to a particular event to occur and when that event triggers, all the callbacks subscribed to that event are fired one by one in order to which they were registered.

const EventEmiter = require("events");

const emitter = new EventEmiter();

emitter.on("messageLogged", (a, b) => {
  console.log("messageLogged " + a + " " + b);
});

//making a noise , produce something
emitter.emit("messageLogged", 10, 20);

emitter.on("readFile", () => {
  console.log("File Reads");
});

emitter.emit("readFile");
