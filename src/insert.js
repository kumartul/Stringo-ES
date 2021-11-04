const isStr = require("./utils/isStr.js");
const has = require("./has.js");
const breakStr = require("./breakStr.js");

// Function: Inserts a string before a substring in a string
function insertBefore(string, targetSubstring, stringToBeInserted){
	if(isStr(string) && isStr(targetSubstring) && isStr(stringToBeInserted)){
		if(has(string, targetSubstring)){
			let chunk1 = breakStr(string, targetSubstring)[0];
			let chunk2 = breakStr(string, targetSubstring)[1];

			return (chunk1 + stringToBeInserted + chunk2);
		}
		else{
			throw new RangeError(`Failed to execute 'insertBefore': ${targetSubstring} is not a substring of the passed string`);
		}
	}
	else{
		throw new TypeError("Failed to execute 'insertBefore': All the arguments must be a string");
	}
}

// Function: Inserts a string after a substring in a string
function insertAfter(string, targetSubstring, stringToBeInserted){
	if(isStr(string) && isStr(targetSubstring) && isStr(stringToBeInserted)){
		if(has(string, targetSubstring)){
			let breakPoint = string.indexOf(targetSubstring) + targetSubstring.length;

			let chunk1 = breakStr(string, string[breakPoint])[0];
			let chunk2 = breakStr(string, string[breakPoint])[1];

			return chunk1 + stringToBeInserted + chunk2;
		}
		else{
			throw new RangeError(`Failed to execute 'insertAfter': ${targetSubstring} is not a substring of the passed string`);
		}
	}
	else{
		throw new TypeError("Failed to execute 'insertAfter': All the arguments must be a string");
	}
}

module.exports.insertBefore = insertBefore;
module.exports.insertAfter = insertAfter;
