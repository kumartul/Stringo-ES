const isStr = require("./utils/isStr.js");

// Function: Sorts the characters in a string
function sortChars(string, ascending=true){
	if(isStr(string)){
		let chars = string.split("");
		let sortedStr = ascending ? chars.sort() : chars.sort().reverse();
		return sortedStr.join("");
	}
	else{
		throw new TypeError("Failed to execute 'sortChars': First argument must be a string");
	}
}

// Function: Sorts the words in a string
function sortWords(string, ascending=true){
	if(isStr(string)){
		let words = string.split(" ");
		let sortedStr = ascending ? words.sort() : words.sort().reverse();
		return sortedStr.join(" ");
	}
	else{
		throw new TypeError("Failed to execute 'sortChars': First argument must be a string");
	}
}

module.exports.sortChars = sortChars;
module.exports.sortWords = sortWords;
