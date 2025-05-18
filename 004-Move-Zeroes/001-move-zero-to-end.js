/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
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
