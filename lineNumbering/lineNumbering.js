//Write a function which takes a list of strings and
//returns each line prepended by the correct number.

var number=function(array){
  if (array.length === 0) {
    return [];
  }

  var result = [];

  for (var i = 0; i < array.length; i ++) {
    var string = "";
    string += (i + 1) + ": " + array[i];
    result.push(string);
  }

  return result;
}