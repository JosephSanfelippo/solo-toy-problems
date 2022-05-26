//make two functions (max and min, or maximum and minimum, etc.,
//depending on the language) that receive a list of integers as input
//and return, respectively, the largest and lowest number in that list.

var min = function(list){
  let minInt = list[0]
  for (var i = 0; i < list.length; i++) {
    if (list[i] < minInt) {
      minInt = list[i]
    }
  }
  return minInt;
}

var max = function(list){
  let maxInt = list[0];
  for (var i = 0; i < list.length; i++) {
    if (list[i] > maxInt) {
      maxInt = list[i]
    }
  }
  return maxInt;
}