'use strict'

function topSecret(str){
	let newStr = str.split(' ')
		.map(y => y.split('')
			.map(x => ((x.toLowerCase().charCodeAt() - 3 < 97 && x.toLowerCase().charCodeAt() > 65) ? String.fromCharCode(x.charCodeAt() + 23) : String.fromCharCode(x.charCodeAt() - 3)))
			.join(''))
		.join(' ');
	console.log(newStr);
	}
	// console.log(arr);
	// for( let elem of str) {
		// console.log(elem.charAt());
	// }
//question1: The top secret file number is...
// answer1="?";
// //question2: Super agent's name is...
// answer2="?";
// //question3: He stole the treasure is...
// answer3="?";


topSecret("Pb qdph lv Mrkq") // "My name is John");
topSecret("wklv lv dq hadpsoh") // "this is an example");
topSecret("Khoor Zruog!") // "Hello World!");

