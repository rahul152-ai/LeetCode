var heightChecker = function (heights) {
  let expectedArray = [...heights];
  for (let i = 0; i < expectedArray.length; i++) {
    for (let j = 0; j < expectedArray.length - 1 - i; j++) {
      if (expectedArray[j] > expectedArray[j + 1]) {
        let temp = expectedArray[j];
        expectedArray[j] = expectedArray[j + 1];
        expectedArray[j + 1] = temp;
      }
    }
  }

  let count = 0;

  console.log(expectedArray);
  console.log(heights);

  for (let i = 0; i < expectedArray.length; i++) {
    if (expectedArray[i] != heights[i]) {
      count++;
    }
  }

  return count;
};
