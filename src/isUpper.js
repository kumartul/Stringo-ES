const isStr = require("./utils/isStr.js");

// Function: Checks whether the string is in uppercase or not
function isUpper(string){
	if(isStr(string)){
		return string === string.toUpperCase();
	}
	else{
		throw new TypeError("Failed to execute 'isUpper': Argument must be a string");
	}
}

module.exports = isUpper;
