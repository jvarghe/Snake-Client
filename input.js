/* USER INPUT HANDLING
 *
 * `input.js` is responsible for handling user input, processing it and
 * responding to it.
 */


// Setup interface to handle user input from `stdin`.
// In `client.js`, we returned a `serverConnection` object from the `connect()`
// function that allowed us to interact with the server. Similarly, the `stdin`
// object returned by `setupInput()` will allow us to listen for keyboard input
// and react to it.
const setupInput = function() {

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

  // `\u0003` maps to `Ctrl+C`. If this key combination is pressed, exit the
  // program.
  if (userCommand === '\u0003') {
    process.exit();
  }

};



// EXPORTS
module.exports = { setupInput };