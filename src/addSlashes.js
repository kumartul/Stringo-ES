const isStr = require('./utils/isStr.js');
const validator = require('validator');

// Function: Escapes special characters in the string by adding a backward slash before
// them
function addSlashes(string){
	if(isStr(string)){
		let chars = string.split("");
		let finalArr = [];
		chars.forEach(char => {
			if(!validator.default.isAlphanumeric(char)){
				finalArr.push("\\" + char);
			}
			else{
				finalArr.push(char);
			}
		});
		return finalArr.join("");
	}
	else{
		throw new TypeError("Failed to execute 'addSlashes': Argument must be a string");
	}
}

module.exports = addSlashes;
