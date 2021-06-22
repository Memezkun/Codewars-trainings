'use strict'

/*There are n bears in the orchard and they picked a lot of apples.

They distribute apples like this:

The first bear divided the apple into n piles, each with the same number. 
leaving an apple at last, and the apple was thrown away. 
Then he took 1 pile and left the n-1 pile.

The second bear divided the apple into n piles, each with the same number. 
leaving an apple at last, and the apple was thrown away. 
Then he took 1 pile and left the n-1 pile.

and so on..
Hmm.. your task is coming, please calculate the minimum possible number 
of these apples (before they start distributing)

Input/Output
[input] integer n

The number of bears.

2 <= n <= 9 (JS, Crystal and C) 2 <= n <= 50 (Ruby and Python)

[output] an integer

The minimum possible number of apples.

Example
For n = 5, the output should be 3121.*/
// for n = 2 output = 7

function howManyApples(n){
	if(n==1) return 2;
	if(n==2) return 7;
	else return Math.pow(n,n)-n+1;
}

howManyApples(5);
