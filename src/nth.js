import { nth as _nth } from "arrayism";

import isStr from "./utils/isStr.js";
import isInt from "./utils/isInt.js";

// Function: Returns the character at the nth place
// If 'n' is negative, then the last character represents -1
function nth(string, n){
	if(isStr(string)){
		if(isInt(n)){
			let chars = string.split("");
			return _nth(chars, n);
		}
		else{
			throw new TypeError("Failed to execute 'nth': n must be an integer");
		}
	}
	else{
		throw new TypeError("Failed to execute 'nth': First argument must be a string");
	}
}

export default nth;
