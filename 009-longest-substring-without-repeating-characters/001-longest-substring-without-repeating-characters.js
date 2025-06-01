/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  for (let i = 0; i < s.length; i++) {
    let myMap = new Map();
    for (let j = i; j < s.length; j++) {
      let char = s[j];
      if (myMap.has(char)) {
        maxLength = Math.max(maxLength, j - i);
        break;
      } else {
        myMap.set(char, 1);
      }
      if (j === s.length - 1) {
        maxLength = Math.max(maxLength, j - i + 1);
      }
    }
  }

  return maxLength;
};
