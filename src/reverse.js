const isStr = require("./utils/isStr.js");

// Function: Reverses a string
function reverse(string){
	if(isStr(string)){
		let chars = string.split("");
		chars = chars.reverse();
		return chars.join("");
	}
	else{
		throw new TypeError("Failed to execute 'reverse': Argument must be a string");
	}
}

module.exports = reverse;
