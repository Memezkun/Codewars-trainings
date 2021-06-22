'use strict'

/*This time no story, no theory. The examples below show you how 
to write function accum:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"*/

/*The parameter of accum is a string which includes only 
letters from a..z and A..Z.*/

function accum(s) {
	let newArray = s.split(''),
		mumbledArray = [],
		newMumbledArray = [];

	for (let i = 0; i < newArray.length; i++) {
		mumbledArray.push((newArray[i].repeat(i+1).toLowerCase())); 
	}

	for (let elem of mumbledArray) {
		let elemArray = [];
		elemArray = elem.split('');
		elemArray.splice(0,1,elemArray[0].toUpperCase());
		newMumbledArray.push(elemArray.join(''));
	}

	return newMumbledArray.join('-');

}
