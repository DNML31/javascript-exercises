const ftoc = function(fah) {
  const convert = (fah - 32) * (5/9);
  return rounded = Math.round(convert * 10)/10;
};

const ctof = function(cel) {
  const convert = (cel * (9/5)) + 32;
  return rounded = Math.round(convert * 10)/10;
};


ftoc(32);
ftoc(100);
ftoc(-100);

ctof(0);
ctof(73.2);
ctof(-10);

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
