'use strict'

function isSquare(n){
	if (Number.isInteger(Math.sqrt(n))) {
		console.log(true);
	} else {
		console.log(false);
	}
}

isSquare(24);

