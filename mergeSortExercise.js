/*
  Run the code in Node by typing
    node recursionExercise.js

  Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology.
*/

function merge(arr1, arr2) {
  if(typeof arr1 === 'number') arr1 = [arr1];
  if(typeof arr2 === 'number') arr2 = [arr2];

  let i = 0;
  let j = 0;
  let k = 0;
  let result = [];

  while(i < arr1.length && j < arr2.length) {
    if(arr1[i] <= arr2[j]) {
      result[k] = arr1[i];
      i += 1;
      k += 1;
    } else {
      result[k] = arr2[j];
      j += 1;
      k += 1;
    }
  }

  for(; i < arr1.length; i++) {
    result[k] = arr1[i];
    k += 1;
  }
  for(; j < arr2.length; j++) {
    result[k] = arr2[j];
    k += 1;
  }

  return result;
}

function mergeSort(arr) {
  if(arr.length === 1) {
    return arr;
  } else {
    let middleIndex = Math.ceil(arr.length / 2);
    let left = arr.slice(0, middleIndex);
    let right = arr.slice(middleIndex);

    let resultLeft = mergeSort(left);
    let resultRight = mergeSort(right);
    return merge(resultLeft, resultRight);
  }
}
console.log(mergeSort([2, 5, 3, 6, 4, 9, 14, 1, 7]));
console.log(mergeSort([13, 2, 7, 19, 23, 8, 11, 13]));