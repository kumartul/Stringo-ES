const isStr = require('./utils/isStr.js');
const position = require('./position.js');

// Function: Returns the sum of the position of all the alphabets in the string
function value(string){
	if(isStr(string)){
		let value = 0;
		for(let i = 0; i < string.length; i++){
			value += position(string[i]);
		}
		return value;
	}
	else{
		throw new TypeError("Failed to execute 'value': Argument must be a string");
	}
}

module.exports = value;
