const isStr = require("./utils/isStr.js");

// Function: Checks if the string contains a substring or not
function has(string, substring){
	if(isStr(string) && isStr(substring)){
		return string.indexOf(substring) > -1;
	}
	else{
		throw new TypeError("Failed to execute 'has': Arguments must be a string");
	}
}

module.exports = has;
