const triangularNumber = number => {
  //base case
  if (number === 0) {
    return 0;
  }

  //general case
  return number + triangularNumber(number - 1);
};

console.log(triangularNumber(6));
