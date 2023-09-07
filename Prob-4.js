//Given an integer x, return true if x is a
// palindrome
// and false otherwise.


function isPalindrome(x) {
  // Handle negative numbers (they can't be palindromes)
  if (x < 0) {
    return false;
  }

  // Initialize variables to store the reverse and original numbers
  let reverse = 0;
  let original = x;

  // Reverse the number by building it digit by digit in reverse order
  while (x > 0) {
    const digit = x % 10; // Get the last digit
    reverse = reverse * 10 + digit; // Build the reversed number
    x = Math.floor(x / 10); // Remove the last digit from the original number
  }

  // Check if the reversed number is equal to the original number
  return original === reverse;
}

// Example usage:
console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(-121)); // Output: false
console.log(isPalindrome(10)); // Output: false

// Another way using reverse method
function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}
