const isStr = require("./utils/isStr.js");

// Function: Removes all whitespaces from the string
// If removeExtraOnly is true, then more than one whitespace will be removed
function removeWhitespace(string, removeExtraOnly=false){
	if(isStr(string)){
		if(removeExtraOnly){
			string = string.trim();
			return string.replace(/\s{2,}/g, " ");
		}
		else{
			return string.replace(/\s+/g, "");
		}
	}
	else{
		throw new TypeError("Failed to execute 'removeWhitespace': First argument must be a string");
	}
}

module.exports = removeWhitespace;
