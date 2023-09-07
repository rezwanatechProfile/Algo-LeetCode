// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.


var twoSum = function(nums, target) {
  // Create an empty object to store numbers and their indices
const numObj = {};

// if target is 9

// Iterate through the array
for (let i = 0; i < nums.length; i++) {
  const currentNum = nums[i];
  const complement = target - currentNum; // 9-2 = 7

  // Check if the complement exists as a property in the numObj
  if (numObj.hasOwnProperty(complement)) {
    return [numObj[complement], i]; // return the indices of the two numbers. 7 exits in the second iteration
  }

  // Otherwise, store the current number and its index in numObj
  numObj[currentNum] = i;  //// Store {2: 0} in the first iteration
}

// If no solution is found, return an empty array or handle it as needed
return [];
};

const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // Output: [0, 1] (because nums[0] + nums[1] == 9)