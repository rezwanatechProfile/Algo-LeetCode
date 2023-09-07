//Given a string s consisting of words and spaces, return the length of the last word in the string.


function lengthOfLastWord(s) {
  // Split the input string into an array of words
  const words = s.trim().split(' ');

  // Check if the array is empty (no words in the string)
  if (words.length === 0) {
    return 0;
  }

  // Return the length of the last word in the array
  return words[words.length - 1].length;
}

// Example usage:
const inputString = "Hello World";
const length = lengthOfLastWord(inputString);
console.log(length); // Output: 5 (length of "World")
