var isLuhn = function(num) {
  var digits = [];
  var sum = 0;
  while (num > 0) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }
  if (digits.length) {
    for (let i = 1 ; i < digits.length ; i += 2) {
      digits[i] *= 2;
      if (digits[i] >= 10) {
        let tempDigits = [];
        let tempNum = digits[i];
        while (tempNum > 0) {
          tempDigits.push(tempNum % 10);
          tempNum = Math.floor(tempNum / 10);
        }
        digits[i] = tempDigits[0] + tempDigits[1];
      }
    }
  }
  for (let num of digits) {
    sum += num;
  }
  if (sum % 10 === 0) {
    return true;
  }
  return false;
};

module.exports = isLuhn;