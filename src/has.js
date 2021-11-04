import isStr from "./utils/isStr.js";

// Function: Checks if the string contains a substring or not
function has(string, substring){
	if(isStr(string) && isStr(substring)){
		return string.indexOf(substring) > -1;
	}
	else{
		throw new TypeError("Failed to execute 'has': Arguments must be a string");
	}
}

export default has;
