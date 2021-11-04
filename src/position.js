const isStr = require('./utils/isStr.js');

const constants = require('./utils/constants.js');
const validator = require('validator');

// Function: Returns the position of the letter in the alphabet series
function position(letter){
	if(isStr(letter)){
		if(validator.default.isAlpha(letter)){
			if(letter.length === 1){
				return constants.LOWER_ALPHABETS.indexOf(letter.toLowerCase()) + 1;
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

module.exports = position;
