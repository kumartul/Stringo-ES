const isStr = require('./utils/isStr.js');
const sha_1 = require('sha1');

// Function: Hashes a string using sha1 algorithm
function sha1(string){
	if(isStr(string)){
		return sha_1(string);
	}
	else{
		throw new TypeError("Failed to execute 'sha1': Argument must be a string");
	}
}

module.exports = sha1;
