/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let size = nums.length;
  let disAppeard = [];

  for (let i = 1; i <= size; i++) {
    let isExist = false;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] === i) {
        isExist = true;
      }
    }

    if (!isExist) {
      disAppeard.push(i);
    }
    isExist = false;
  }

  return disAppeard;
};
