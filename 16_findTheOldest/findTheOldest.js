const findTheOldest = function(obj) {
    const currentYear = new Date().getFullYear();
    const oldestPerson = obj.reduce(
        (prev, current) => {
            return (prev.yearOfDeath-prev.yearOfBirth || currentYear - prev.yearOfBirth) > (current.yearOfDeath-current.yearOfBirth || currentYear - current.yearOfBirth) ? prev : current
        }
    );
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
