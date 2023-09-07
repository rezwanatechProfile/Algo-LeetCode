//Write a JavaScript function that counts the number of vowels and consonants in a given string.

function countVowelsAndConsonants(str) {
  const vowels = 'aeiouAEIOU';
  let vowelCount = 0;
  let consonantCount = 0;
  for (const char of str) {
    if (vowels.includes(char)) {
      vowelCount++;
    } else if (char.match(/[a-zA-Z]/)) {
      consonantCount++;
    }
  }
  return { vowels: vowelCount, consonants: consonantCount };
}


const result1 = countVowelsAndConsonants('Hello World');
console.log(result1); // Output: { vowels: 3, consonants: 7 }
