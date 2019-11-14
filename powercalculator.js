const powerCalculator = (num, power) => {
  //check if greater than or equal to zero
  if (power < 0) {
    return `exponent should be >= 0`;
  }
  //base case
  if (power === 0) {
    return 1;
  }

  //general case
  return num * powerCalculator(num, power - 1);
};

console.log(powerCalculator(10, 2));
