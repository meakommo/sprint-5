/*Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

*/
var hash = "#"
for (var i = 0; i < 7; i ++){
	console.log(hash);
	hash += "#";
}

/*

Write a program that uses console.log to print all the numbers from 1 to 100, 
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the 
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
*/
for (var i = 0; i < 100; i ++){
  	var number = i +1;
  if (number % 3 == 0){
    number = "fizz";
  }
  else if (number % 5 == 0) {
  	number = "buzz";
  }
	console.log(number)
}

/*
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
*/

var size = 8;
var square = "";
var board = "";
for(var i = 0; i < size; i ++){
	if (i % 2 === 0){
  		for(var j = 0; j < size; j ++){
    		if (j % 2 === 0){
     	   	square = " ";
      	  }
      		else {
      	  	square = "#";
      	  }
    	  board += square;
    	}
    }
  	else {
    	  for(var j = 0; j < size; j ++){
    		if (j % 2 != 0){
     	   	square = " ";
      	  }
      		else {
      	  	square = "#";
      	  }
    	  board += square;
    	}
    }
  board += "\n";
}
console.log(board);