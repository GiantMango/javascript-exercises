const findTheOldest = function(persons) {
    let oldestPerson = {
        name: null,
        yearOfBirth: 0,
        yearOfDeath: 0,
    };

    let age = 0;

    for (let person of persons) {
        age = person.yearOfDeath - person.yearOfBirth;
        if (age > oldestPerson.yearOfDeath - oldestPerson.yearOfBirth) {
            oldestPerson = person;
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
