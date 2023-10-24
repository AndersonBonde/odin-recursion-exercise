/*
  Run this code with
    Node recursionExercises.js

  Exercises from the recursion lesson;

  Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the fibonacci sequence. Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].
*/

function fib(num) {
  const fibs = [0, 1];

  for(let i = 2; i < num; i++) {
    const [a, b] = fibs.slice(-2);
    fibs.push(a + b);
  }

  return fibs;
}
console.log(`Fibonacci iteration: ${fib(8)}`); // [0, 1, 1, 2, 3, 5, 8, 13];

/*
  Now write another function fibsRec which solves the same problem recursively. This can be done in just a couple of lines (or 1 if you’re crazy, but don’t consider either of these lengths a requirement… just get it done).
*/

function fibRec(num) {
  if(num < 2) 
    return num;
  else
    return fibRec(num - 1) + fibRec(num - 2);
}
console.log(`Fibonacci recursive ${fibRec(7)}`); // 13;

// Recursion questions from: 
// https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion;

/*
  Question 1: Sum all numbers
  Write a function called sumRange. It will take a number and return the sum of all 
  numbers from 1 up to the number passed in.

  Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6.
*/

function sumRange(num) {
  if(num === 1) return 1;

  return num + sumRange(num - 1);
}
console.log(`Question 01: ${sumRange(3)}`); // 6

/*
  Question 2: Power function
  Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.
*/

function power(num, pow) {
  if(pow === 0) 
    return 1;

  return num * power(num, pow - 1);
}
console.log(`Question 02: ${power(2, 5)}`); // 32

/*
  Question 3: Calculate factorial
  Write a function that returns the factorial of a number. As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.
*/

function factorial(num) {
  if(num === 1) return 1;

  return num * factorial(num - 1);
}
console.log(`Question 03: ${factorial(5)}`); // 120

/*
  Question 4: Check all values in an array
  Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function
*/

var allAreLessThanSeven = all([1,2,9], function(num){
	return num < 7;
});

function all(arr, callback) {
  let copy = [...arr];

  if(copy.length === 0) return true;
  
  if(callback(copy[0])) {
    copy.shift();
    return all(copy, callback);
  }

  return false;
}
console.log(`Question 04: ${allAreLessThanSeven}`); // false

/*
  Question 5: Product of an array
  Write a function called productOfArray which takes in an array of numbers and returns the product of them all
*/

var six = productOfArray([1,2,3]) // 6
var sixty = productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
  let copy = [...arr];

  if(copy.length === 0) return 1;

  return copy.shift() * productOfArray(copy);
}
console.log(`Question 05: ${six}, ${sixty}`) // 6, 60

/*
  Question 6: Search JS object
  Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.
*/

var nestedObject = {
  data: {
      info: {
          stuff: {
              thing: {
                  moreStuff: {
                      magicNumber: 44,
                      something: 'foo2'
                  }
              }
          }
      }
  }
}

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false

function contains(obj, value) {
  for(let key in obj) {
    if(typeof obj[key] === 'object')
      return contains(obj[key], value);
    else if(obj[key] === value) 
      return true;
  }

  return false;
}
console.log(`Question 06: ${hasIt}, ${doesntHaveIt}`); // true, false

/*
  Question 7: Parse a multi-dimensional array
  Given a multi-dimensional integer array, return the total number of integers stored inside this array
*/

var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7

function totalIntegers(arr) {
  if(arr.length === 0) return 0;

  let total = 0;
  let copy = [...arr];
  let first = copy.shift();

  if(Array.isArray(first)) {
    total += totalIntegers(first);
  } else {
    if(Number.isInteger(first)) 
      total += 1;
  }

  return total + totalIntegers(copy);
}
console.log(`Question 07: ${seven}`); // 7

/*
  Question 8:
  Write a function that sums squares of numbers in list that may contain more lists
*/

function sumSquares(arr) {
  let sum = 0;
  
  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      sum += sumSquares(arr[i]);
    } else {
      sum += arr[i]**2;
    }
  }

  return sum;
}

var l = [1,2,3]; 
console.log(sumSquares(l)); // 1 + 4 + 9 = 14
l = [[1,2],3]; 
console.log(sumSquares(l)); // 1 + 4 + 9 = 14
l = [[[[[[[[[1]]]]]]]]] 
console.log(sumSquares(l)); // 1 = 1
l = [10,[[10],10],[10]] 
console.log(sumSquares(l)); // 100 + 100 + 100 + 100 = 400

/*
  Question 9:
  The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.
*/

function replicate(repeat, num, result = []) {
  if(repeat < 1) return result;

  result.push(num);
  return replicate(repeat - 1, num, result);
}

console.log(replicate(3, 5)) // [5, 5, 5]
console.log(replicate(1, 69)) // [69]
console.log(replicate(-2, 6)) // []
