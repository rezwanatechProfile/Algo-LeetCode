//Create a JavaScript function that finds the longest word in a sentence.

function findLongestWord(sentence) {
  const words = sentence.split(' ');
  let longestWord = '';
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}


const sentence = "The quick brown fox is in Alexandria";
const longest = findLongestWord(sentence);
console.log(longest); // Output: "Alexandria"

