//given a string of space separated numbers, return the highest and lowest

function highAndLow(numbers){
  let array = numbers.split('');
  let newArray = [];
  let result = '';
  array.forEach(number => {
    if (number !== ' ') {
      newArray.push(number)
    }
  })
  newArray.sort(function(a, b){return a - b})
  result += newArray[newArray.length -1] + ' ' + newArray[0];
  return result;
}