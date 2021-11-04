const isStr = require("./utils/isStr.js");
const isInt = require("./utils/isInt.js");

// Function: Returns a random character or characters from the string
function random(string, length=1){
	if(isStr(string)){
		if(isInt(length)){
			let randomArr = [];

			for(let i = 0; i < length; i++){
				randomArr.push(string[(Math.floor(Math.random() * string.length))]);
			}
            
			return randomArr.join("");
		}
		else{
			throw new TypeError("Failed to execute 'random': Length must be an integer");
		}
	}
	else{
		throw new TypeError("Failed to execute 'random': First argument must be a string");
	}
}

module.exports = random;