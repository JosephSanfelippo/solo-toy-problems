//Return the first non-consecutive number in the array

function firstNonConsecutive (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1];
    }
  }
  return null;
}