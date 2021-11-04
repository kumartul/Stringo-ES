const isStr = require('./utils/isStr.js');

// Function: Filters the specified things from the string
function filter(string, whatToFilter){
	if(isStr(string)){
		const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

		switch(whatToFilter.toLowerCase()){
			case "vowel":{
				let chars = string.split("");
				let finalArr = [];
				chars.forEach(char => {
					if(vowels.includes(char)){
						finalArr.push(char);
					}
				});
				return finalArr.join("");
			}
			case "consonant":{
				let chars = string.split("");
				let finalArr = [];
				chars.forEach(char => {
					if(!vowels.includes(char)){
						finalArr.push(char);
					}
				});
				return finalArr.join("");
			}
			case "whitespace":{
				let chars = string.split("");
				let finalArr = [];
				chars.forEach(char => {
					if(char === " "){
						finalArr.push(char);
					}
				});
				return finalArr.join("");
			}
			default:
				throw new RangeError("Failed to execute 'filter': Invalid Case");
		}
	}
	else{
		throw new TypeError("Failed to execute 'filter': First argument must be a string");
	}
}

module.exports = filter;
