function isPalindrome(word) {
  return word === word.split("").reverse().join("");
}


/* 
  Add your pseudocode here
  - Use function/argument already named
  - Create variables that split, reverse, and join strings 
  - If/else statement that compares original string with new string then returns a boolean

    NEW OPTIMIZED CODE:
  - Use function/argument already named
  - Return value is original string compared to the string being split, reversed, and joined in one line
*/

/*
  Add written explanation of your solution here
  - Function is used to split string into single letters. The updated string is then reversed in order.
    The newly updated string is then joined back together. In an if statement, the original
    string is compared with the updated string and produces a true statement if both strings match. An else statement is
    provided to return a false statement if both strings do not match. Optimized to use less variables and replaced 
    if statement with a single return.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("radar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("close"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
