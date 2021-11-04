const validator = require("validator");
const isStr = require("./utils/isStr.js");

// Checks if the string is an alphanumeric string or not
function isAlnum(string){
	if(isStr(string)){
		return validator.default.isAlphanumeric(string);
	}
	else{
		throw new TypeError("Failed to execute 'isAlnum': Argument must be a string");
	}
}

module.exports = isAlnum;
