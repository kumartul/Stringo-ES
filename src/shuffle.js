const isStr = require("./utils/isStr.js");

const Arrayism = require("arrayism");

// Function: Shuffles the string
function shuffle(string){
	if(isStr(string)){
		let chars = string.split("");
		chars = Arrayism.shuffle(chars);
		return chars.join("");
	}
	else{
		throw new TypeError("Failed to execute 'shuffle': The argument must be a string");
	}
}

module.exports = shuffle;
