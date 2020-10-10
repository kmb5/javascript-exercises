const caesar = function(text, shift) {

    const alphabetLower = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetUpper = alphabetLower.toUpperCase();

    let output = ''

    for (let i = 0; i < text.length; i++) {
        
        let charIndex, offsetChar;
        let char = text[i];
        if (alphabetLower.indexOf(char) != -1) {
            charIndex = alphabetLower.indexOf(char);
            offsetNum = (charIndex + shift + 26) % alphabetLower.length;
            offsetChar = alphabetLower[offsetNum];
        }
        else if (alphabetUpper.indexOf(char) != -1) {
            charIndex = alphabetUpper.indexOf(char); // 12
            offsetNum = (charIndex + shift + 26) % alphabetUpper.length; // 12+-5+26 = 33 % 26 = 7 
            offsetChar = alphabetUpper[offsetNum];
        }
        else {
            offsetChar = char;
        }


        output += offsetChar;

    }

    return output;

}


module.exports = caesar
