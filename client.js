/* CLIENT MODULE
 *
 * This module handles the client program's connection to the server program.
 *
 *
 * ABOUT EVENTS
 *
 * When you connect to a server, or when it closes its connection with you,
 * or when it sends you data, these are events. You can control how your client
 * responds to these events if you know how to listen for them. If you don't
 * listen for the event, you can't react to it.
 *
 * The `serverConnection` object that Node gave you has everything you need to
 * listen for events that occur on your connection. The code that defines what
 * to do when an event occurs is often called an EVENT HANDLER. The `.on()`
 * method lets you specify an event name and a function that does something
 * when that event happens.
 *
 *
 *    serverConnection.on("event name", functionThatDoesSomething);
 *
 *
 * In fact, you don't need to use a named function that does something. Instead
 * you can use an anonymous function. This is common practice:
 *
 *
 *    serverConnection.on("event name", () => {
 *        // code that does something
 *    });
 *
 *
 * The "event name" has to be a specific event name as defined by Node. For
 * example, connect is a specific event that happens when a successful
 * connection is made:
 *
 *
 *    serverConnection.on("connect", () => {
 *        // code that does something when the connection is first established
 *    });
 *
 */


// IMPORTS
const net = require("net");
const { IP, PORT } = require("./constants.js");


// This function establishes a connection to the game server
// (`snek-multiplayer`). It returns a `serverConnection` object, which
// represents the connection between client and server.
const connect = function() {

  // Just above the snake, the server can print three (and only three)
  // alphanumeric characters that represent your name. Perhaps you could enter
  // your initials?
  const initials = "XYZ";


  // Create a `serverConnection` object that contains the IP address and port
  // details. This object is full of useful methods and properties that can now
  // be used to interact with the server! `serverConnection` is an instance of
  // the Socket class.
  const serverConnection = net.createConnection({
    host: IP,
    port: PORT,
  });


  // Interpret data incoming from the server as UTF-8 text.
  serverConnection.setEncoding("utf8");


  // Event: On (Re-)Connecting to the Server, Do These Things:
  serverConnection.on("connect", (connectHandlerCB = () => {
    console.log("Successfully connected to Snake game server!");

    // Action: Testing to see what would happen if we sent "Move" messages to
    // the server immediately after connecting. Then we tried using `setTimeout()`
    // and `setInterval()` between two move commands to see the effect it would
    // have.
    //
    // serverConnection.write("Move: up");
    // setInterval(() => {
    //   serverConnection.write("Move: up");
    // }, 50);

  }) => {

    // Action: First things first! As soon as you are connected, inform the
    // client that you have connected to the server.
    connectHandlerCB();


    // Action: Tell the server your name so that it can be displayed next to
    // the snake's image (You can do this by sending the server this piece of
    // text: `Name: XXX`, XXX is any three alphanumeric letters).
    //
    // `serverConnection.write()` is the method you use to "write data to a
    // connection".
    serverConnection.write("Name: " + initials);


    // Event: Incoming Data
    // Response: Log incoming messages from the server to console:
    serverConnection.on("data", (data) => {
      console.log("Server says: ", data);
    });


    /* Supported Move Commands for a snake:
     *
     *  * "Move: up" - move up one square (unless facing down)
     *  * "Move: down" - move down one square (unless facing up)
     *  * "Move: left" - move left one square (unless facing right)
     *  * "Move: right" - move left one square (unless facing left)
     *
     * Snakes cannot instantly make a 180 turn by moving in the opposite
     * direction.
     */

  });


  return serverConnection;
};



// EXPORTS
/* OBJECT DESTRUCTING
 *
 * Using Object Destructing to populate the `module.exports` object.
 * The alternative would have a lot more boilerplate. Example:
 *
 *    var hero = {
 *        name: 'Batman',
 *        realName: 'Bruce Wayne'
 *    };
 *
 *    var name     = hero.name;
 *    var realName = hero.realName;
 *
 * Line 77 and 78 demonstrate the boilerplatey way of doing this,
 * but that can be reduced to the line below if you use Object
 * Destructing:
 *
 *    const { name, realName } = hero;
 */
module.exports = { connect };
