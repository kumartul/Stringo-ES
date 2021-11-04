const isStr = require("./utils/isStr.js");
const has = require("./has.js");

// Function: Returns the distance between two substrings in the string
function distance(string, substring1, substring2){
	if(isStr(string) && isStr(substring1) && isStr(substring2)){
		if(has(string, substring1) && has(string, substring2)){
			return string.indexOf(substring2) - string.indexOf(substring1);
		}
	}
	else{
		throw new TypeError("Failed to execute 'distance': Arguments must be a string");
	}
}

module.exports = distance;
