//given an array of numbers and strings, return the
//array with all strings removed


function filter_list(l) {
  return l.filter(element => typeof(element) !== 'string');
 }