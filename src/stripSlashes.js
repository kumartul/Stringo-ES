import isStr from "./utils/isStr.js";
import remove from "./remove.js";

// Function: Strips the slashes before special characters in the string
function stripSlashes(string){
	if(isStr(string)){
		return remove(string, "\\", true);
	}
	else{
		throw new TypeError("Failed to execute 'stripSlashes': Argument must be a string");
	}
}

export default stripSlashes;
