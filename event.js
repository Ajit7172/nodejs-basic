const event = require("events");

const event = new event.EventEmitter();
//
const sayHello = () => {
    console.log("hello");
};

// listen
eventTest.on("test", sayHello);

// fire
eventTest.emit("test");