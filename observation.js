// REQ: given an array, and a low and a high threshold. return a new array, rounded the number to be within the threshold.

function keepInThreshold(array, low, high) {
  let lowestInArray = Math.min(...array);
  let highestInArray = Math.max(...array);
  let scoresGiven = [];
  //map
  if (low < lowestInArray || high > highestInArray) {
    return 'invalid thresholds';
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] < low) {
      scoresGiven.push(low);
    }
    if (array[i] >= low && array[i] <= high) {
      scoresGiven.push(array[i]);
    }
    if (array[i] > high) {
      scoresGiven.push(high);
    }
  }
  return scoresGiven;
}

console.log(keepInThreshold([3, 3, 4, 7, 9], 2, 6));

// [3,3,4,7,9], 2, 6 => [3,3,4,6,6]
// [3,3,4,7,9], 8, 2 => "invalid thresholds"
// [5,1,9,6,1], 4, 7 = [4,4,5,6,7]
