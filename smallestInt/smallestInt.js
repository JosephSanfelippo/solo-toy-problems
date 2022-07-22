//give an array of integers, find the smallest

//I: An array of integers
//O: The smallest integer
//C:  Array will not be empty,
//E: N/A


var smallestInt = function(args) {
  let sorted = args.sort((a, b) => {return a-b});
  return sorted[0];
}