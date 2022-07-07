/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let result = [];
  let n = nums;
  let t = target;
  
  var recurse = function(index, nums, target) {
    for (var i = 0; i < nums.length; i++) {
      if (nums[index] + nums[i] === target && i !== index) {
        result.push(index);
        result.push(i);
        return result;
      } 
    }
    if (result.length < 2) {
      return recurse((index + 1), nums, target);
    }
  }
    return recurse(0, n, t);
};
