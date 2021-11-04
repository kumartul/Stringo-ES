const isStr = require('./utils/isStr.js');
const nth = require('./nth.js');
const reverse = require('./reverse.js');
const removeWhitespace = require('./removeWhitespace.js');

// Python-style string slicing
function pySlice(string, sliceCode){
	// If the input and sliceCode is not a string, then throw an error
	if(isStr(string) && isStr(sliceCode)){
		// If the sliceCode is a number, then return the character at that index
		if(Number.isInteger(Number(sliceCode))){
			// If the number is greater than the length of the string minus 1, then throw an
			// error
			if(!(sliceCode > (string.length - 1))){
				return nth(string, Number(sliceCode));
			}
			else{
				throw new RangeError("Failed to execute 'pySlice': Invalid Index");
			}
		}
		else{
			let indexOfFirstColon = sliceCode.indexOf(":");
			let indexOfLastColon = sliceCode.lastIndexOf(":");

			let from = removeWhitespace(sliceCode.slice(0, indexOfFirstColon), false);
			let to = removeWhitespace(sliceCode.slice((indexOfFirstColon + 1), indexOfLastColon), false);
			let step = removeWhitespace(sliceCode.slice((indexOfLastColon + 1),), false);

			// If 'from' is blank, then it's 0 (the first index), else if 'from' is an
			// integer, then 'from' will be converted to Number else an error will be thrown
			if(from === ""){
				from = 0;
			}
			else if(Number.isInteger(Number(from))){
				from = Number(from);
			}
			else{
				throw new TypeError("Failed to execute 'pySlice': Invalid firstIndex");
			}

			// If 'to' is blank, then it's length of the string minus 1 (the first index),
			// else if 'to' is an integer, then 'to' will be converted to Number else an
			// error will be thrown
			if(to === ""){
				to = string.length;
			}
			else if(Number.isInteger(Number(to))){
				if(Number(to) > 0){
					to = Number(to) + 1;
				}
				else{
					to = Number(to);
				}
			}
			else{
				throw new TypeError("Failed to execute 'pySlice': Invalid secondIn");
			}

			// If the 'step' is blank, then it's 1 (default value) else if 'step' is an
			// integer, then it will be converted to Number else an error will be thrown
			if(step === ""){
				step = 1;
			}
			else if(Number.isInteger(Number(step))){
				step = Number(step);
			}
			else{
				throw new TypeError("Failed to execute 'pySlice': Invalid step");
			}

			console.log(from);
			console.log(to);

			// If 'from' is negative, calculate it's positive distance
			if(from < 0){
				from = string.length + from;
			}
			// If 'to' is negative, calculate it's positive distance
			if(to < 0){
				to = string.length + to;
			}

			// If 'step' is zero, return ""
			if(step === 0){
				return "";
			}
			else if(step > 0){
				console.log(from);
				console.log(to);
				let chars = string.slice(from, to).split("");
				console.log(chars);
				let finalArr = [];

				// Iterate through all the characters and if their index is divisible by
				// 'step', then push  them to the final array
				chars.forEach((char, index) => {
					if(index % step === 0){
						finalArr.push(char);
					}
				});

				return finalArr.join("");
			}
			else if(step < 0){
				let chars = reverse(string).slice(from, to).split("");
				let finalArr = [];

				// Iterate through all the characters and if their index is divisible by
				// minus of 'step', then push  them to the final array
				chars.forEach((char, index) => {
					// Dividing by -step because the step is already negative and -- => +
					if(index % -step === 0){
						finalArr.push(char);
					}
				});

				return finalArr.join("");
			}
			else{
				throw new RangeError("Failed to execute 'pySlice': Invalid value of step");
			}
		}
	}
	else{
		throw new TypeError("Failed to execute 'pySlice': Both the arguments must be a string");
	}
}

module.exports = pySlice;
