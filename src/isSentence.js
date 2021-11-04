const isStr = require("./utils/isStr.js");

const changeCase = require("./changeCase.js");

// Function: Checks whether a string is in sentence case or not
function isSentence(string){
	if(isStr(string)){
		return string === changeCase(string, "sentence");
	}
	else{
		throw new TypeError("Failed to execute 'isSentence': Argument must be a string");
	}
}

module.exports = isSentence;
