'use strict'

// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string 
// in Expanded Form. For example:

/*expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'*/

function expandedForm(num) {
	let arr = num.toString().split(''),
		expandedArr = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] != 0) {
			expandedArr.push(arr[i] * Math.pow(10, (arr.length - 1 - i))); 
		}
	}

	console.log(expandedArr.join(' + '));
}

expandedForm(498);
