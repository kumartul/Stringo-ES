const isStr = require("./utils/isStr.js");

// Function: Changes the case of the string
function changeCase(string, stringCase){
	if(isStr(string)){
		switch(stringCase.toLowerCase()){
			case "upper": {
				return string.toUpperCase();
			}
			case "lower": {
				return string.toLowerCase();
			}
			case "sentence": {
				let firstChar = string[0].toUpperCase();
				let remainingChars = string.slice(1,).toLowerCase();
				return firstChar + remainingChars;
			}
			default: {
				throw new RangeError("Failed to execute 'changeCase': Invalid case");
			}
		}
	}
	else{
		throw new TypeError("Failed to execute 'changeCase': First argument must be a string");
	}
}

module.exports = changeCase;
