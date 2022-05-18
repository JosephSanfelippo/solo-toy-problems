function sum (numbers) {
  "use strict";

 let arraySum = 0;

if (numbers.length === 0) {
  return arraySum;
}

numbers.forEach(number => {
  arraySum += number;
})

return arraySum;

};