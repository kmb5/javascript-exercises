function translate(str) {

	const vowels = 'aeiou';
	let word;

	if (vowels.indexOf(str[0].toLowerCase()) !== -1) {
		word = str + 'ay';
	}
	else {
		word = str.substr(1) + str[0] + 'ay';
	}

	return word;
}


module.exports = {
	translate
}

