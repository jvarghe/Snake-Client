/* MO2 W05 CHALLENGE: SNAKE
 *
 * NOTE: If you are playing the game, the keyboard commands are only accepted
 * in client terminal, not the server one.
 *
 * This file, `play.js`, will serve as the main file through which we will
 * launch the game client. To run the program, run this command: `node play.js`.
 *
 *
 * UNANSWERED QUESTIONS
 *
 *   1. In `input.js`, you need to import the `serverConnection` object from
 *      `client.js`, so that you can use it in `handleUserInput()`. But, if
 *      you delete in the import statement pulling in the `connect()` function,
 *      `serverConnection` continues to work in `input.js`. In fact, this
 *      object (`serverConnection`) is not assigned to anything in `input.js`.
 *      How then, does `input.js` know to which object it is referring?
 */

// IMPORTS
const { connect } = require("./client.js");
const { setupInput } = require("./input.js");


// DRIVER CODE

// Initiate a connection to the game server.
console.log("Connecting ...");

// Initiate a connection to the game server.
const connectionObj = connect();

// Call `setupInput()` to create an object that will track user input from the
// keyboard. Pass in `connectionObj` so that your input module (`input.js`) can
// send messages to the server.
setupInput(connectionObj);