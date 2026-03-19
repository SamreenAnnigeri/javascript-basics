const PI = 3.14159;

function square(n) {
  return n * n;
}

function areaOfCircle(radius) {
  return PI * square(radius);
}

function add(a, b) {
  return a + b;
}

module.exports = {
  PI,
  square,
  areaOfCircle,
  add,
};
