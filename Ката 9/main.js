'use strict'

/*Simple, given a string of words, 
return the length of the shortest word(s).

String will never be empty and you do not need to 
account for different data types.*/

function findShort(s){
	let newArray = (s.split(' ')),
		min = Math.min(...newArray.map(({ length }) => length));
	return min;
}

findShort("bitcoin take over the world maybe who knows perhaps");