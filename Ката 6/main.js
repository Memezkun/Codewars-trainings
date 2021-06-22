'use strict'

function mergeArrays(a, b) {
	let newArray = [];

	for (let i = 0; i < a.length || i < b.length; i++) {
		if (a[i] !== undefined) {
			newArray.push(a[i]);
		}
		if (b[i] !== undefined) {
			newArray.push(b[i]);
		}
	}
	return newArray;
}



mergeArrays(['b', 'r', 'a', 'u', 'r', 's', 'e', 'q', 'z'], [2, 5, 8, 23, 67, 6]);

/*Write a function that combines two arrays by alternatingly 
taking elements from each array in turn.*/

