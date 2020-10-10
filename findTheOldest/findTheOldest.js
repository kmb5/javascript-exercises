let findTheOldest = function(arr) {

    let oldestAge = 0;
    let oldestPerson = {};

    for (let i = 0; i < arr.length; i++) {

        let yob = arr[i].yearOfBirth;
        let yod = arr[i].yearOfDeath || new Date().getFullYear();
        let age = yod - yob;

        if (age > oldestAge) {
            oldestAge = age;
            oldestPerson = arr[i];
        }
    }

    return oldestPerson;
}

module.exports = findTheOldest
