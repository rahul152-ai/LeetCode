/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// The function moves all zeroes in the array to the end while maintaining the order of non-zero elements.
// It uses a two-pointer approach to achieve this in O(n) time complexity and O(1) space complexity.
var moveZeroes = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    if (current != 0 && count == i) {
      count++;
    } else if (current != 0 && count != i) {
      nums[count] = nums[i];
      count++;
      nums[i] = 0;
    }
  }
};
