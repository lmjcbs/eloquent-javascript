/*
Minimum
The previous chapter introduced the standard function Math.min that returns its smallest argument.
We can build something like that now.
Write a function min that takes two arguments and returns their minimum. */

const minimum = (a, b) => a > b ? b : a;
console.log(minimum(4, 6));

/*
Recursion
We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two.
Here’s another way to define whether a positive whole number is even or odd:

Zero is even.

One is odd.

For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description.
The function should accept a single parameter (a positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this? */

const isEven = number => {
  if (number < 0) number = Math.abs(number); // Converts negative integers to positive, so that function doesn't increase negative integer by minusing 2 (infinite loop);
  if (number === 0) { // if number reaches 0, number is even
    return true;
  } else if (number === 1) { // if number reaches 1, number is odd
    return false;
  } else {
    return isEven(number - 2); // if number is not 0 or 1, continue to subtract 2
  }
};
console.log(isEven(75));
