import isStr from "./utils/isStr.js";
import isObj from "./utils/isObj.js";

// Function: Joins two or more strings
function join(string, ...strings){
	if(isStr(string)){
		if(isObj(strings)){
			strings.forEach(str => {
				if(isStr(str)){
					string += str;
				}
				else{
					throw new TypeError(`Failed to execute 'join': ${str} is not a string`);
				}
			});
			return string;
		}
		else{
			throw new TypeError("Failed to execute 'join': The second argument must be an object");
		}
	}
	else{
		throw new TypeError("Failed to execute 'join': The first argument must be a string");
	}
}

export default join;
