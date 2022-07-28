//You are given an odd-length array of integers, in which all of them are the same, except for one single number.
//Complete the method which accepts such an array, and returns that single different number.
//The input array will always be valid! (odd-length >= 3)


 // 1. create ‘control’ variable
//     1. will be used to determine if next number being compared is or is not the stray - set value to 1st element in array
// 2. create ‘duplicate’ variable
//     1. see 1.a — set value to null
// 3. 3. create ‘theCheese’ variable
//     1. set value at null. The Cheese Stands Alone.
// 4. iterate through input array starting at index 1
//     1. compare each element to control
//     2. IF current number matches control
//         1. set duplicate to current element
//         2. ELSE IF current number doesn’t match control and duplicate is defined
//             1. set theCheese to value of current element
// 5. IF duplicate is not null
//     1. return theCheese
//     2. else if duplicate is null
//         1. return control


function stray(numbers) {

  0;
}


console.log(stray([1, 1, 2]));
console.log(stray([17, 17, 3, 17, 17, 17, 17]));