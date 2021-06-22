'use strict'

/*Complete the method that takes a boolean value and return a 
"Yes" string for true, or a "No" string for false.*/

function boolToWord( bool ){
	let string;

	if (!bool) {
		string = 'No'
		return string;
	} else {
		string = 'Yes'
		return string;
	}
}

boolToWord(true);
