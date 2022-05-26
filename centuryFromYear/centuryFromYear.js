//Given a year, return the century it is in.

function century(year) {
  var resultArray = [];
  let cent = 1;
  if (year <= 100) {
    return cent
  }
  let string = JSON.stringify(year);
  let split = string.split('');
  split.map(num => {
    let numVersion = Number(num)
    resultArray.push(numVersion);
  })
  cent = resultArray[0] + resultArray[1]
  if (resultArray.length > 3) {
    cent += 10;
  }
  if (resultArray[2] === 0 && resultArray[3] === 0) {
    cent -= 1;
  }
  return cent;
}