import isStr from "./utils/isStr.js";

import { unique as _unique } from "arrayism";

// Function: Returns the unique characters in a string
function unique(string, caseSensitive=true){
	if(isStr(string)){
		return caseSensitive ? _unique(string.split("")) : _unique((string.toLowerCase()).split(""));
	}
	else{
		throw new TypeError("Failed to execute 'unique': The argument must be a string");
	}
}

export default unique;
