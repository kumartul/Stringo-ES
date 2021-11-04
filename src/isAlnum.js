import validator from "validator";
import isStr from "./utils/isStr.js";

// Checks if the string is an alphanumeric string or not
function isAlnum(string){
	if(isStr(string)){
		return validator.isAlphanumeric(string);
	}
	else{
		throw new TypeError("Failed to execute 'isAlnum': Argument must be a string");
	}
}

export default isAlnum;
