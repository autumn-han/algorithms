// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order

// input: nums = [2,7,11,15], target = 9
// output: [0,1]

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (j !== i) {
        let sum = nums[i] + nums[j];
        if (sum === target) {
          let returnArr = [i, j];
          return returnArr;
        }
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
