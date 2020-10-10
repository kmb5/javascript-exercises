const palindromes = function(str) {

    let stripped = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
    
    if (stripped === stripped.split('').reverse().join('')) {
        return true;
    }
    return false
}

module.exports = palindromes
