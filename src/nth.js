const Arrayism = require("arrayism");

const isStr = require("./utils/isStr.js");
const isInt = require("./utils/isInt.js");

// Function: Returns the character at the nth place
// If 'n' is negative, then the last character represents -1
function nth(string, n){
	if(isStr(string)){
		if(isInt(n)){
			let chars = string.split("");
			return Arrayism.nth(chars, n);
		}
		else{
			throw new TypeError("Failed to execute 'nth': n must be an integer");
		}
	}
	else{
		throw new TypeError("Failed to execute 'nth': First argument must be a string");
	}
}

module.exports = nth;
