//write a function which returns the time since midnight in milliseconds.

function past(h, m, s){
  var hour = 3600000 * h;
  var minute = 60000 * m;
  var second = 1000 * s;

  var totalTime = hour + minute + second;

  return totalTime;


}