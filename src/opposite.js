const isStr = require('./utils/isStr.js');
const isLower = require('./isLower.js');
const constants = require('./utils/constants.js');

const validator = require('validator');

// Function: Returns the string with all the characters replaced with their opposite letters
function opposite(string){
	if(isStr(string)){
		let charsArr = string.split("");
		for(let i = 0; i < charsArr.length; i++){
			if(validator.default.isAlpha(charsArr[i])){
				if(isLower(charsArr[i])){
					charsArr[i] = constants.LOWER_ALPHABETS[25 - constants.LOWER_ALPHABETS.indexOf(charsArr[i])];
				}
				else{
					charsArr[i] = constants.UPPER_ALPHABETS[25 - constants.UPPER_ALPHABETS.indexOf(charsArr[i])];
				}
			}
		}
		return charsArr.join("");
	}
	else{
		throw new TypeError("Failed to execute 'opposite': Argument must be a string");
	}
}

module.exports = opposite;
