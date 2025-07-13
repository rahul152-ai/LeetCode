/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function (players, trainers) {
  let count = 0;
  players.sort((a, b) => a - b);
  trainers.sort((a, b) => a - b);
  let p = players.length;
  let t = trainers.length;

  for (let i = 0, j = 0; i < p && j < t; i++, j++) {
    while (j < t && players[i] > trainers[j]) {
      j++;
    }
    if (j < t) {
      count++;
    }
  }
  return count;
};
