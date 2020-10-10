const sumAll = function(a, b) {

    if (typeof a !== 'number' || typeof b !== 'number' || a < 0 || b < 0) {
        return 'ERROR';
    }

    let sum = 0;
    let bigger = a > b ? a : b;
    let smaller = a < b ? a : b;

    for (let i = smaller; i < bigger + 1; i++) {
        sum += i;
    }

    return sum;

}

module.exports = sumAll
