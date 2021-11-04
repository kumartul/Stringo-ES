import isStr from './utils/isStr.js';
import md_5 from 'blueimp-md5';

// Function: Hashes a string using md5 algorithm
function md5(string){
	if(isStr(string)){
		return md_5(string);
	}
	else{
		throw new TypeError("Failed to execute 'md5': Argument must be a string");
	}
}

export default md5;
