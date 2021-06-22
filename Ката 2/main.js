'use strict'

/*Your task is to write a function that takes 
a string and return a new string with all vowels removed.*/

function disemvowel(str) {
	let stringArray = str.split(''),
		newString = [];
	function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1
	}

	for (let elem of stringArray) {
		if (isVowel(elem) == false) {
			newString.push(elem);
		} 
	}

	str = newString.join('');
	console.log(str)
	return str;
}

