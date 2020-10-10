const getTheTitles = function(arr) {

    let titles = [];
    arr.forEach(el => titles.push(el.title));

    return titles;

}

module.exports = getTheTitles;
