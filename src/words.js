const isStr = require("./utils/isStr.js");

// Function: Returns the words in a string
function words(string){
	if(isStr(string)){
		return string.split(" ");
	}
	else{
		throw new TypeError("Failed to execute 'words': The argument must be a string");
	}
}

module.exports = words;
