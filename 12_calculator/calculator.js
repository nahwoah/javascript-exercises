const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(num) {
  let sum = 0;
	for (let i=0; i < num.length; i++){
    sum += num[i];
  }
  return sum;
};

const multiply = function(arr) {
  let sum = 1;
  for (let i=0; i < arr.length; i++){
    sum *= arr[i];
  }
  return sum;
};

const power = function(num, exponent) {
	let result = 1;
  for (let i=0; i < exponent; i++){
    result *= num;
  }
  return result;
};

const factorial = function(num) {
  let result = 1;
	while(num > 0){
    result *= num;
    num--;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
