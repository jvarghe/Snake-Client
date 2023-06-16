/* USER INPUT HANDLING
 *
 * `input.js` is responsible for handling user input, processing it and
 * responding to it.
 *
 *
 * BRINGING A CONNECTION OBJECT INTO THE INPUT MODULE
 *
 * How can your input module send messages to the server without a connection
 * object? It can't! You need to allow the connection object to have access to
 * the data coming in from the keyboard.
 *
 * In other words, variables that hold keyboard data need to be in the same
 * scope as the connection object (or passed to it in some way). One way to fix
 * this is to pass the `serverConnection` object returned by `connect()` to the
 * `setUpInput()` function. In truth, this is not the most ideal solution, but
 * it is simple and good enough for our purposes.
 *
 * Before proceeding, let's think about how the connection object is being
 * passed around:
 *
 *     1. `connect()` returns an object that can be used to interact with the
 *        server.
 *     2. the object returned by `connect()` should be passed into
 *        `setupInput()`.
 *     3. `setupInput()` places a reference to that object in another variable
 *         `serverConnection` which is in a global scope of that module.
 *     4.  When data comes in from your keyboard, the `stdin` event handler can
 *         now interact with the server because the scope in the handler now
 *         includes both data from the keyboard AND the connection object!
 */


// Stores the active TCP connection object (from `client.js`).
let serverConnection;


// Setup interface to handle user input from `stdin`.
// In `client.js`, we returned a `serverConnection` object from the `connect()`
// function that allowed us to interact with the server. Similarly, the `stdin`
// object returned by `setupInput()` will allow us to listen for keyboard input
// and react to it.
//
// `setupInput()` has been updated to take a connection object so that it can
// send messages to the server.
const setupInput = function(connectionToServer) {

  serverConnection = connectionToServer;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // Register an event listener for stdin. When listener is given data coming
  // from the keyboard, this listener will invoke `handleUserInput()` and pass
  // in this data so that the predicate function can respond to it.
  stdin.on("data", handleUserInput);


  return stdin;

};


// `setupInput()` will call this function when the user enters input via the
// keyboard. In this function, `handleUserInput()`, we will specify the
// responses to user input. In other words, what happens when a particular key
// (combination) is pressed on the keyboard input.
const handleUserInput = function(userCommand) {

  // `\u0003` maps to `Ctrl + C`. If this key combination is pressed, exit the
  // program.
  if (userCommand === "\u0003") {
    process.exit();
  }


  // Declare the movement keys:
  // Developer Tip: ** Always work incrementally.** Instead of sending a command
  // to the server right away, you tested that your keyboard event handler was
  // working and had the right strings to send to the server.

  // Up key:
  if ((userCommand === "w") || (userCommand === "W")) {
    // console.log("Move: up");
    serverConnection.write("Move: up");
  }

  // Left key:
  if ((userCommand === "S") || (userCommand === "s")) {
    // console.log("Move: down");
    serverConnection.write("Move: down");
  }

  // Down key:
  if ((userCommand === "a") || (userCommand === "A")) {
    // console.log("Move: left");
    serverConnection.write("Move: left");
  }

  // Right key:
  if ((userCommand === "d") || (userCommand === "D")) {
    // console.log("Move: right");
    serverConnection.write("Move: right");
  }


  // Canned Messages/Taunts:
  // If `1` is pressed:
  if (userCommand === "1") {
    serverConnection.write("Say: Ha Ha!");
  }

  // If `2` is pressed:
  if (userCommand === "2") {
    serverConnection.write("Say: Tasty!");
  }

  // If `3` is pressed:
  if (userCommand === "3") {
    serverConnection.write("Say: GG!");
  }

};



// EXPORTS
module.exports = { setupInput };