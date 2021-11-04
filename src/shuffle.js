import isStr from "./utils/isStr.js";

import { shuffle as _shuffle } from "arrayism";

// Function: Shuffles the string
function shuffle(string){
	if(isStr(string)){
		let chars = string.split("");
		chars = _shuffle(chars);
		return chars.join("");
	}
	else{
		throw new TypeError("Failed to execute 'shuffle': The argument must be a string");
	}
}

export default shuffle;
