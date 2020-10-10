const repeatString = function(str, num) {

    if (num >= 0) {
        return str.repeat(num);
    }
    return 'ERROR';

}

module.exports = repeatString
