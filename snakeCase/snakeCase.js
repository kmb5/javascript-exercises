const snakeCase = function(str) {

    let lower = str.toLowerCase();
    lower = lower.replace(/[]/g, '')


    return lower.replace(/[ -\.\.]/g, '_')

}

module.exports = snakeCase
