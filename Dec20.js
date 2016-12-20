// Implement a swap function for arrays. What are the inputs your function should take? What are the outputs?

// Implement a reverse function for arrays using your swap function.

// Write pseudo-code to solve this, then write javascript.

//function takes two inputs (elements to swap)
//outputs array w/ selected elements in swapped places
//2nd function takes swapped array and reverses it
'use strict';
function swap(arr, pos1, pos2){
  var orig1 = arr[pos1];
  // console.log('orig1- ', orig1);
  var orig2 = arr[pos2];
  // console.log('orig2- ', orig2);
  for (var i = 0; i < arr.length; i++) {
    if(i === pos1){
      arr[i] = orig2;
    }
    if(i === pos2){
      arr[i] = orig1;
    }
  }
  return arr;
}
// var swapArr = [1,2,3,4,5];
// console.log(swap(swapArr, 1, 2));

function reverse(arr){
  var halfArrLength = Math.ceil(arr.length/2);
  // console.log('halfArrLength- ', halfArrLength);
  for (var i = 0; i < halfArrLength; i++) {
    var arrInvLength = arr.length-1-i;
    // console.log('arrInvLength- ', arrInvLength);
    swap(arr, i, arrInvLength);
    // console.log('arr inside loop- ', arr);
  }
  return arr;
}
// console.log('reverse result- ',reverse(swapArr));

module.exports = { swap, reverse };
