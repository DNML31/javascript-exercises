const add = function(a, b) {
	return a + b;
};

const subtract = function(c, d) {
  return c - d;
};

const e = [1,3,5,7,9];

const sum = function(e) {
  if (e.length === 0) {
    return 0;
  } else if (e.length === 1) {
    return e[0];
  } 

  const sumAll = e.reduce(
    (previousValue, currentValue) => previousValue + currentValue, 0
  );
  return sumAll;
};


const f = [2,4,6,8,10,12,14];
const multiply = function(f) {
  const product = f.reduce(
    (previousValue, currentValue) => previousValue * currentValue
  );
  return product;
};

const power = function(g, h) {
  return Math.pow(g, h);
};

const factorial = function(x) {

  var result = x;
  if (x === 0 || x === 1) {
    return 1;
  }

  while (x > 1) {
    x--;
    result = result * x;
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
