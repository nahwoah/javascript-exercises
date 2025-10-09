const palindromes = function (str) {
    let j = -1;
    str = str.toLowerCase();
    str = str.replace(/[^0-9a-z]/gi, '');
    for(let i = 0; i < str.length; i++){
      if (str[i] !== str.at(j)){
        return false;
      }
      j--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
