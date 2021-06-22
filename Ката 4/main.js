'use strict'

/*Your task is to convert strings to how they would be written 
by Jaden Smith. The strings are actual quotes from Jaden Smith, 
but they are not capitalized in the same way he originally typed them.*/

String.prototype.toJadenCase  = function () {
  	let newString = this.split(' '),
		newArray = [];


	for (let elem of newString) {
		let elemArray = [];
		elemArray = elem.split('');
		elemArray.splice(0,1,elemArray[0].toUpperCase());
		newArray.push(elemArray.join(''));
	}
	str = newArray.join(' ');
	return str;
};


let str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());
