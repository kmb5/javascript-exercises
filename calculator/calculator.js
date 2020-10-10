function add (a, b) {
	return a + b ;
}

function subtract (a, b) {
	return a - b;
}

function sum (arr) {
	return arr.reduce((a, b) => a + b, 0);
}

function multiply (arr) {
	return arr.reduce((a, b) => a * b);
}

function power(num, power) {
	return Math.pow(num, power);
}

function factorial(num) {

	if (num === 0 || num === 1) {
		return 1;
	}
	else {
		return factorial(num - 1) * num;
	}
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}