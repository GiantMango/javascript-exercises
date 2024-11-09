const findTheOldest = function(persons) {
    let oldestPerson = {
        name: null,
        yearOfBirth: 0,
        yearOfDeath: 0,
    };

    let age = 0;
    let thisYear = new Date().getFullYear();

    for (let person of persons) {
        if (person.yearOfDeath == null) {
            person.yearOfDeath = thisYear;
            age = thisYear - person.yearOfBirth;
        } else {
            age = person.yearOfDeath - person.yearOfBirth;
        }
        
        if (age > oldestPerson.yearOfDeath - oldestPerson.yearOfBirth) {
            oldestPerson = person;
        }
    }
    
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
