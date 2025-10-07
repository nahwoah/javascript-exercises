const removeFromArray = function(str, ...rem) {
    str = str.filter(item => !rem.includes(item))
    return str;
};



// Do not edit below this line
module.exports = removeFromArray;
