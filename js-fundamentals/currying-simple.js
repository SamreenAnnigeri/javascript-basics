// Currying - simple examples

// Instead of add(1, 2, 3), we do add(1)(2)(3)
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(add(1)(2)(3)); // 6

// Fix first argument: multiply by 2
function multiply(a) {
  return function (b) {
    return a * b;
  };
}

const double = multiply(2);
console.log(double(5)); // 10
