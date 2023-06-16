/* CONSTANTS
 *
 * This file will contain any constant values that the rest of the program may
 * need.
 *
 * DISCUSSION: WHAT OTHER HARD-CODED DATA IN THIS PROGRAM COULD BE TURNED INTO
 * CONSTANTS?
 *
 *     1. Perhaps the player's name/initials. That said, one could argue that
 *        this should be provided as a command line argument instead.
 *
 *     2. The movement keys (W, A, S, D) could be added to constants like like
 *        `MOVE_UP_KEY`, etc.
 *
 *     3. What about the key mappings for messages? Every time a user presses
 *        the key 'x', it displays the message 'y'. This seems like a mapping
 *        that's perfect for an object ({ x: "y" }). Instead of using if
 *        statements to implement this, you can define an object (as a constant)
 *        which defines these message mappings. Your logic would change to
 *        simply lookup the appropriate mapping in the object, and if found,
 *        send the value as the message string.
 */

const IP = "localhost";   // Keep as `localhost` or write in your IP address.
const PORT = 12345;       // Replace with your computer's port.


const cannedMessages = {
  "1": "Say: Ha Ha!",
  "2": "Say: Tasty!",
  "3": "Say: GG!"
};


// EXPORTS
module.exports = { IP, PORT, cannedMessages };