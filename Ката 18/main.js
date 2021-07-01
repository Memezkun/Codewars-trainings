'use strict'

function iqTest(numbers){
	let odds = 0,
		numbersArray = numbers.split(' ');

	for(let elem of numbersArray) {
		odds = odds + elem % 2;
	}

	if(odds == 1) {
		for (let elem of numbersArray) {
			if((elem % 2) == 1) {
				return +(numbersArray.indexOf(elem))+1;
			}
		}
	} else {
		for (let elem of numbersArray) {
			if((elem % 2) == 0) {
				return +(numbersArray.indexOf(elem))+1;
			}
		}
	}
}


/*Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

Examples:
iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even
*/