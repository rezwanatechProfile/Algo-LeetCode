
// Implement a JavaScript function to calculate the factorial of a number recursively.

function factorialRecursive(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorialRecursive(n - 1);
}

// Example usage:
const result = factorialRecursive(5); // Calculates 5!
console.log(result); // Output: 120

// Recursive functions are functions that call themselves, either directly or indirectly,
//in order to solve a problem by breaking it down into smaller, more manageable subproblems.

// When n is 0 or 1 (the base case), it returns 1 because the factorial of 0 and 1 is 1.
// For any other value of n, it calculates the factorial by multiplying n with the result of factorialRecursive(n - 1).


// 1
// 2 * 1= 2
// 3 * 2 * 1 = 6
// 4 * 3 * 2* 1 = 24