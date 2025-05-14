/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let n = arr.length;
  let max = -1;
  for (let j = n - 1; j >= 0; j--) {
    let a = arr[j];
    arr[j] = max;

    max = Math.max(a, max);
  }

  return arr;
};
