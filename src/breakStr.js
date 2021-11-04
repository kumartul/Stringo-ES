const isStr = require("./utils/isStr.js");
const has = require("./has.js");

// Function: Breaks a string into two parts based on a substring
function breakStr(string, substring){
	if(isStr(string) && isStr(substring)){
		if(has(string, substring)){
			let breakPoint = string.indexOf(substring);

			let chunk1 = string.slice(0, breakPoint);
			let chunk2 = string.slice(breakPoint,);

			return [chunk1, chunk2];
		}
		else{
			throw new RangeError(`Failed to execute 'breakStr': ${substring} is not a substring of the passed string`);
		}
	}
	else{
		throw new TypeError("Failed to execute 'breakStr': Both the arguments must be a string");
	}
}

module.exports = breakStr;
