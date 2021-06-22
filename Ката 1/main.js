'use strict'

function spinWords(string){
    let stringSplit = string.split(' '),
    	newArray = [];

	for (let i = 0; i < stringSplit.length; i++) {
    	if (stringSplit[i].length >= 5) {
    		newArray.push(stringSplit[i].split('').reverse().join(''));
    	} else {
    		newArray.push(stringSplit[i]);
    	}
    }
    return newArray.join(' ');
};

spinWords('Привет как дела дорогуша');

/*Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (like the name of this kata).

Strings passed in will consist of only letters and spaces.
Spaces will be included only when more than one word is present.*/
