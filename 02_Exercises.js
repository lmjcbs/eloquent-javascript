/*
Looping a triangle
Write a loop that makes seven calls to console,log
to output the following trianlge:
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
