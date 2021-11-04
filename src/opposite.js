import isStr from './utils/isStr.js';
import isLower from './isLower.js';
import { LOWER_ALPHABETS, UPPER_ALPHABETS } from './utils/constants.js';

import validator from 'validator';

// Function: Returns the string with all the characters replaced with their opposite letters
function opposite(string){
	if(isStr(string)){
		let charsArr = string.split("");
		for(let i = 0; i < charsArr.length; i++){
			if(validator.isAlpha(charsArr[i])){
				if(isLower(charsArr[i])){
					charsArr[i] = LOWER_ALPHABETS[25 - LOWER_ALPHABETS.indexOf(charsArr[i])];
				}
				else{
					charsArr[i] = UPPER_ALPHABETS[25 - UPPER_ALPHABETS.indexOf(charsArr[i])];
				}
			}
		}
		return charsArr.join("");
	}
	else{
		throw new TypeError("Failed to execute 'opposite': Argument must be a string");
	}
}

export default opposite;
