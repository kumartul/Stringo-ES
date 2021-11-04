import isStr from './utils/isStr.js';

import { LOWER_ALPHABETS } from './utils/constants.js';
import validator from 'validator';

// Function: Returns the position of the letter in the alphabet series
function position(letter){
	if(isStr(letter)){
		if(validator.isAlpha(letter)){
			if(letter.length === 1){
				return LOWER_ALPHABETS.indexOf(letter.toLowerCase()) + 1;
			}
			else{
				throw new RangeError("Failed to execute 'position': Argument's length must be 1");
			}
		}
		else{
			return 0;
		}
	}
	else{
		throw new TypeError("Failed to execute 'position': Argument must be a string");
	}
}

export default position;
