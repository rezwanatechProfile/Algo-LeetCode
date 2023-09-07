// Directions

// A sentence is a string of single-space separated words where each word consists only of lowercase letters.

// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

// Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

function uncommonFromSentences(s1, s2) {

  let uncommonWords = [];

  let string1 = s1.split(" ")
  let string2 = s2.split(" ")

  console.log(string1)

  //compare

for(let ele in Object.keys(string1)){
  if(string1[ele] === 1){
    uncommonWords.push(ele)

  }

  return uncommonWords
}

}

console.log(uncommonFromSentences('this apple is sweet', 'this apple is sour')); // ['sweet', 'sour']

console.log(uncommonFromSentences('apple apple', 'banana')); // ['banana']
