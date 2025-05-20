/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    if (current % 2 == 0 && count != i) {
      let dup = nums[count];
      nums[count] = current;
      nums[i] = dup;
      count++;
    } else if (current % 2 == 0 && count == i) {
      count++;
    }
  }

  return nums;
};
