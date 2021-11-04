const isStr = require("./utils/isStr.js");

// Function: Counts the occurrence of a substring in the string
function count(string, substring, caseSensitive=true){
	if(isStr(string) && isStr(substring)){
		let count = 0;

		if(!caseSensitive){
			string = string.toLowerCase();
			substring = substring.toLowerCase();
		}

		while(string.search(substring) > -1){
			count++;
			string = string.replace(substring, "");
		}

		return count;
	}
	else{
		throw new TypeError("Failed to execute 'count': Both the arguments must be a string");
	}
}

module.exports = count;
