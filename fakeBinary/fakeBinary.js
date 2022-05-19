//Given a string of digits, replace any digit below 5 with '0'
//and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x){
  var resultString = '';

  for (var i = 0; i < x.length; i++) {
    if (x[i] < 5) {
      resultString += '0';
    } else {
      resultString += '1'
    }
}
  return resultString;
}