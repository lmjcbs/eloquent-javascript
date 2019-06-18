/*
Minimum
The previous chapter introduced the standard function Math.min that returns its smallest argument.
We can build something like that now.
Write a function min that takes two arguments and returns their minimum. */

const minimum = (a, b) => a > b ? b : a;
console.log(minimum(4, 6));
