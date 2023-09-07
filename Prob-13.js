//Implement a JavaScript function that removes duplicate elements from an array.

function removeDuplicates(arr) {
  const uniqueArray = [];

  for (const element of arr) {
    if (!uniqueArray.includes(element)) {
      uniqueArray.push(element);
    }
  }

  return uniqueArray;
}

// Example usage:
const originalArray = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(originalArray);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
