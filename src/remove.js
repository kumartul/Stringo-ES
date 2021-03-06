import isStr from "./utils/isStr.js";
import has from "./has.js";

// Function: Removes a substring from the string
function remove(string, substring, removeAll=true){
	if(isStr(string) && isStr(substring)){
		if(has(string, substring)){
			if(removeAll){
				while(string.indexOf(substring) > -1){
					string = string.replace(substring, "");
				}
				return string;
			}
			else{
				return string.replace(substring, "");
			}
		}
	}
	else{
		throw new TypeError("Failed to execute 'remove': Both the arguments must be string");
	}
}

export default remove;
