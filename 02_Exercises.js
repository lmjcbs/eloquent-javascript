/*
Looping a triangle
Write a loop that makes seven calls to console,log to output the following trianlge:

#
##
###
####
#####
######
#######
*/
let triangle = '';
for (let i = 0; i < 7; i++) {
  triangle += '#';
  console.log(triangle);
}

/*
FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/
for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log('FizzBuzz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else console.log(i);
}

/*
Chessboard
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/
const size = 8;
let chessboard = '';
for (let i = 0; i < size; i++) { // Maps the rows on the chessboard
  if (i % 2 === 0) { // Checks if row number is equal or not to have an alternating pattern
    for (let j = 0; j < size; j++) { // if equal, print alternating ' ' '#' pattern starting with ' '
      if (j % 2 === 0) {
        chessboard += ' ';
      } else chessboard += '#';
    }
  } else {
    for (let k = 0; k < size; k++) { // if odd, print alternating ' ' '#' pattern starting with '#'
      if (k % 2 === 0) {
        chessboard += '#';
      } else chessboard += ' ';
    }
  }
  chessboard += '\n'; // Prints to new line after reaching collum size limit as defined in size variable
}
console.log(chessboard);
