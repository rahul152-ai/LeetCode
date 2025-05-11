/**
 * @param {number[]} arr
 * @return {boolean}
 */

var checkifExist = function (arr) {
  let hasMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (hasMap.has(2 * num) || (num % 2 == 0 && hasMap.has(num / 2))) {
      return true;
    }

    hasMap.set(num, true);
  }
  return false;
};
