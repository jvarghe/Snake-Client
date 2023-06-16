/* MO2 W05 CHALLENGE: SNAKE
 *
 * NOTE: If you are playing the game, the keyboard commands are only accepted
 * in client terminal, not the server one.
 *
 * This file, `play.js`, will serve as the main file through which we will
 * launch the game client.
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