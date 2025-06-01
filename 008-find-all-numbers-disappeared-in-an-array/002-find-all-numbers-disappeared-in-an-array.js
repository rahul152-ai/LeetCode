/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let missing = [];
  let count = 0;
  let n = nums.length;
  while (count < n) {
    let current = nums[count];
    if (count === current - 1) {
      count++;
      continue;
    } else {
      if (nums[count] === nums[current - 1]) {
        count++;
        continue;
      }
      let temp = nums[current - 1];
      nums[current - 1] = current;
      nums[count] = temp;
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] != i + 1) {
      missing.push(i + 1);
    }
  }

  return missing;
};
