/* MO2 W05 CHALLENGE: SNAKE
 *
 * This file, `play.js`, will serve as the main file through which we will
 * launch the game client.
 */

// IMPORTS
const net = require("net");
const { connect } = require("./client.js");
const { setupInput } = require("./input.js");


// DRIVER CODE

// Initiate a connection to the game server.
console.log("Connecting ...");

// Initiate a connection to the game server.
connect();

// Call `setupInput()` to create an object that will track user input from the
// keyboard.
setupInput();