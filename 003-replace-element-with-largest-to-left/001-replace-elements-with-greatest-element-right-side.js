/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let max = arr[i + 1];

    for (let j = i + 1; j < n; j++) {
      if (arr[j] > max) {
        max = arr[j];
      }
    }

    arr[i] = max;
  }

  arr[n - 1] = -1;

  return arr;
};
