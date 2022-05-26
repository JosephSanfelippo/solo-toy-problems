//make two functions (max and min, or maximum and minimum, etc.,
//depending on the language) that receive a list of integers as input
//and return, respectively, the largest and lowest number in that list.

var min = function(list){
  list.sort();
  return list[0];
}

var max = function(list){
  let maxInt = '';
  for (var i = 0; i < list.length; i++) {
    if (list[i] > maxInt) {
      maxInt = list[i]
    }
  }
  return maxInt;
}