import isStr from "./utils/isStr.js";

import changeCase from "./changeCase.js";

// Function: Checks whether a string is in sentence case or not
function isSentence(string){
	if(isStr(string)){
		return string === changeCase(string, "sentence");
	}
	else{
		throw new TypeError("Failed to execute 'isSentence': Argument must be a string");
	}
}

export default isSentence;
