//Create a function that returns the sum of the two
//lowest positive numbers given an array of minimum 4 positive integers.

function sumTwoSmallestNumbers(numbers) {

  numbers.sort(function(a, b) {
    return a - b;
  });

    return numbers[0] + numbers[1];

  }