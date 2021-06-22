'use strict'

/*The goal of this exercise is to convert a string to a new string 
where each character in the new string is "(" if that character 
appears only once in the original string, or ")" if that character 
appears more than once in the original string. Ignore capitalization 
when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" */

function duplicateEncode(word) {
	let wordArray = word.split(''),
		counts = {}, 
		newArray = wordArray.map(x => x.toLowerCase()), 
		emptyArray = [];

	newArray.forEach( x => { counts[x] = (counts[x] || 0) + 1; });

	for (let elem of newArray) {
		if(counts[elem] > 1) {
			emptyArray.push(')');
		} else {
			emptyArray.push('(');
		}
	}

	return emptyArray.join('');
}
