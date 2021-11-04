import isStr from "./utils/isStr.js";
import isInt from "./utils/isInt.js";

import { chunk as _chunk } from "arrayism";

// Function: Divides the string into chunks of even length
// If the length of all the chunks cannot be even, then the remaining elements are put in the
// last chunk
function chunk(string, length){
	if(isStr(string)){
		if(isInt(length)){
			let chars = string.split("");
			return _chunk(chars, length);
		}
		else{
			throw new TypeError("Failed to execute 'chunk': Length must be an integer");
		}
	}
	else{
		throw new TypeError("Failed to execute 'chunk': First argument must be a string");
	}
}

export default chunk;
