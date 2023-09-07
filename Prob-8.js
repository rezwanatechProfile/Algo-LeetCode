
// Write a function that reverses a string. The input string is given as an array of characters s.

function reverseString(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // Swap the characters at the left and right pointers
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    // Move the pointers towards the center
    left++;
    right--;
  }

  return s
}

console.log(reverseString(["h", "e", "l", "l", "o"]))