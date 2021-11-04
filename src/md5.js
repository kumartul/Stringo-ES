const isStr = require('./utils/isStr.js');
const md_5 = require('blueimp-md5');

// Function: Hashes a string using md5 algorithm
function md5(string){
	if(isStr(string)){
		return md_5(string);
	}
	else{
		throw new TypeError("Failed to execute 'md5': Argument must be a string");
	}
}

module.exports = md5;
