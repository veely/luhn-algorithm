var isLuhn = function(num) {
  var digits = [];
  while (num > 0) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }
  if (digits.length) {
    for (var i = 1 ; i < digits.length ; i += 2) {

    }
  }
  // digits.reverse();
  return true;
};

module.exports = isLuhn;