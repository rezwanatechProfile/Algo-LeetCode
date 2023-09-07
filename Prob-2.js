// Create a JavaScript function to generate the nth number in the Fibonacci sequence using recursion.

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}


// Example usage:
const result = fibonacci(6); // Calculates 5!
console.log(result);


// 1 + 1 = 2
// 1 + 2 = 3
// 3 + 2 = 5
// 5 + 3 = 8