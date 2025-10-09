const fibonacci = function(num) {
    if(num < 0){
      return "OOPS";
    }
    let fib1 = 0;
    let fib2 = 1;
    let result = fib1 + fib2;
    for (let i = 1; i <= num; ++i){
      fib1 = fib2;
      fib2 = result;
      result = fib1 + fib2;
    }
    return fib1;
};

// Do not edit below this line
module.exports = fibonacci;
