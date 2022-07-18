// REQ: given an array, and a low and a high threshold. return a new array, rounded the number to be within the threshold.

function keepInThreshold(array, low, high) {
  if (low >= high) {
    return 'invalid thresholds';
  }

  let scoresGiven = array.map(checkEachNum);

  function checkEachNum(num) {
    if (num < low) {
      return low;
    } else if (num >= low && num <= high) {
      return num;
    } else if (num > high) {
      return high;
    }
  }

  return scoresGiven;
}

console.log(keepInThreshold([1, 3, 5, 7, 9], 2, 8));

// [1,3,5,7,9], 2, 8 => [2,3,5,7,8]
// [3,3,4,7,9], 2, 6 => [3,3,4,6,6]
// [3,3,4,7,9], 8, 2 => "invalid thresholds"
// [5,1,9,6,1], 4, 7 => [4,4,5,6,7]
// [3,3,4,5,5], 3, 5 => [3,3,4,5,5]
