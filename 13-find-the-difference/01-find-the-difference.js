/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let random = {};

  for (let Char of t) {
    random[Char] = (random[Char] || 0) + 1;
  }

  for (const Char of s) {
    random[Char] = random[Char] - 1;

    if (random[Char] === 0) {
      delete random[Char];
    }
  }

  return Object.keys(random)[0];
};
