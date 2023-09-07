//PROBLEM: Write a dynamic function/method/procedure/etc. that given the following list of words,
// returns the first unique word from the list.

function findFirstUniqueWord(words) {
  const wordFrequency = {};

//Iterate Through the Array of Words to Count Frequency:
  for (const word of words) {
    if (wordFrequency[word]) {
      wordFrequency[word]++;
    } else {
      wordFrequency[word] = 1;
    }
  }

//Find the First Unique Word:
  for (const word of words) {
    if (wordFrequency[word] === 1) {
      return word;
    }
  }

  return null; // No unique words found
}

const wordsList = ["apple", "banana", "apple", "cherry", "banana"];
const firstUnique = findFirstUniqueWord(wordsList);


//Handle the Case of No Unique Words:
if (firstUnique !== null) {
  console.log(`The first unique word is: ${firstUnique}`);
} else {
  console.log("No unique words found.");
}
