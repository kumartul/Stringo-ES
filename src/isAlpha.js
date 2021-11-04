import validator from "validator";
import isStr from "./utils/isStr.js";

// Checks if the string is an alphanumeric string or not
function isAlpha(string){
	if(isStr(string)){
		return validator.isAlpha(string);
	}
	else{
		throw new TypeError("Failed to execute 'isAlpha': Argument must be a string");
	}
}

export default isAlpha;
