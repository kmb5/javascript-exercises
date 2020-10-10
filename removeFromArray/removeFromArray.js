const removeFromArray = function(array, ...elements) {

    return array.filter(e => elements.indexOf(e) < 0);
}

module.exports = removeFromArray
