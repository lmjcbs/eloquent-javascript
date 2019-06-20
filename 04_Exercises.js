/* The sum of a range
The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

console.log(sum(range(1, 10)));
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers.
Run the example program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior.
The function call range(1, 10, 2) should return [1, 3, 5, 7, 9].
Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2]. */

const range = (start, end, step) => {
  step = step || 1; // use given argument. when no argument is given, default to one.
  let result = [];
  if (step > 0) { // checks whether step is a positive or negative iteger
    for (let i = start; i <= end; i += step) { // if positive, increments will be increasing. comparator must be whilst less than end.
      result.push(i);
    }
    return result;
  } else {
    for (let i = start; i >= end; i += step) { // if negative, increments will be decreasing. comparator must be whilst greater than end.
      result.push(i);
    }
    return result;
  }
};
console.log(range(5, 2, -1));

const sum = (rangeArray) => {
  let total = 0;
  for (let element of rangeArray) { // select each element in rangeArray
    total += element; // add each element to total in order to receive the sum of all values.
  }
  return total;
};
console.log(sum(range(1, 10)));

/*
Reversing an array
Arrays have a reverse method that changes the array by inverting the order in which its elements appear.
For this exercise, write two functions, reverseArray and reverseArrayInPlace.
The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.
The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?
*/
const array = ['hello', 2, 'test', 26, 9000, 'tree'];

const reverseArray = array => {
  let reversedArray = [];
  for (let element of array) {
    reversedArray.unshift(element);
  }
  return reversedArray;
};
console.log(reverseArray(array));

const array2 = ['hello', 2, 'test', 26, 9000, 'tree'];

const reverseArrayInPlace = array => {
  let halfOfArray = Math.floor(array.length / 2); // finds half ot the length of array. Math.floor to fix for odd length arrays
  for (let i = 0; i < halfOfArray; i++) {
    let element = array[i]; // placeholder for one of the two elements that mirror each other in the array
    array[i] = array[array.length - 1 - i]; // assigns the value of a index with it's mirror index
    array[array.length - 1 - i] = element; // assign the placeholder to the mirror index now that the placeholder's value in array has been overwriten
  }
  return array;
};
console.log(reverseArrayInPlace(array2));
