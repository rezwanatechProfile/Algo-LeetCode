
//Create a JavaScript binary search function that finds the index of a target element in a sorted array.
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Found the target, return its index.
    } else if (arr[mid] < target) {
      left = mid + 1; // Target is in the right half.
    } else {
      right = mid - 1; // Target is in the left half.
    }
  }

  return -1; // Target not found in the array.
}

// Example sorted array:
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 13;

// Call the binary search function:
const index = binarySearch(sortedArray, target);

// Check the result:
if (index !== -1) {
  console.log(`Element ${target} found at index ${index}.`);
} else {
  console.log(`Element ${target} not found in the array.`);
}
