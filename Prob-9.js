
//Given a string s, reverse only all the vowels in the string and return it.
//The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.


function reverseVowels(s) {
  // Convert the string to an array for easy modification
  let sArray = s.split("");
  const vowels = "aeiouAEIOU";

  // Initialize two pointers to track vowels from the start and end of the string
  let left = 0;
  let right = sArray.length - 1;

  while (left < right) {
    // Find the first vowel from the left
    while (left < right && vowels.indexOf(sArray[left]) === -1) {
      left++;
    }

    // Find the first vowel from the right
    while (left < right && vowels.indexOf(sArray[right]) === -1) {
      right--;
    }

    // Swap the vowels found at left and right positions
    [sArray[left], sArray[right]] = [sArray[right], sArray[left]];

    // Move the pointers towards each other
    left++;
    right--;
  }

  // Convert the array back to a string and return it
  return sArray.join("");
}
