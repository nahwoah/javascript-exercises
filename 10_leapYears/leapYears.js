const leapYears = function(year) {
    if (year % 4 == 0 && year % 100 != 0 || (year % 400 == 0 && year % 100 == 0)){
        let x = true;
        console.log(x);
        return true;
    } else{
        let x = false;
        console.log(x);
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
