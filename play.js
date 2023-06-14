/* MO2 W05 CHALLENGE: SNAKE
 *
 * This file, `play.js`, will serve as the main file through which we will
 * launch the game client.
 */

// IMPORTS
const net = require("net");
const { connect } = require("./client.js");


// Initiate a connection to the game server.
console.log("Connecting ...");
connect();



