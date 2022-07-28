//given a string of 'directions' (n, s, w, e) and assuming that you
//wil travel in each direction for exactly one minute,
//return whether or not the walk will take exactly 10 minutes AND
//return you to your starting point.

function isValidWalk(walk) {

  if (walk.length !== 10) {
    return false;
  }

  let counter = {
    n: 1,
    s: -1,
    w: 2,
    e: -2
  };

  let start = 0;

  for (var i = 0; i < walk.length; i++) {
    start += counter[walk[i]];
  }

  return start === 0 ? true : false;