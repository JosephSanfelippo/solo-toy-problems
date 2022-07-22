/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let string = x.toString().split('');
  let reverse = string.reverse();

  return Number(reverse.join('')) === x ? true : false;

};