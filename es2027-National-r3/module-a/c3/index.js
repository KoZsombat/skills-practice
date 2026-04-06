function twoSum(nums, target) {
  for (let a = 0; a < nums.length; a++) {
    for (let b = 0; b < nums.length; b++) {
        if (nums[a] + nums[b] == target && nums[a] != nums[b]) return [a, b]
    }
  }
}

// Example usage:
console.log(twoSum([2, 7, 11, 15], 9));
// Output: [0, 1]   because nums[0] + nums[1] === 9

console.log(twoSum([3, 2, 4], 6));
// Output: [1, 2]   because nums[1] + nums[2] === 6

console.log(twoSum([-1, 8, 5, 3], 7));
// Output: [0, 1]   because nums[0] + nums[1] === 7