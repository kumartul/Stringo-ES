import isStr from "./utils/isStr.js";

// Function: Empties the string
function clear(string){
	if(isStr(string)){
		return "";
	}
	else{
		throw new TypeError("Failed to execute 'clear': Argument must be a string");
	}
}

export default clear;
