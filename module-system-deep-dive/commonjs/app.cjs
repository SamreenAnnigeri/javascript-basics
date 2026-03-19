const math = require("./math.cjs");

console.log("CommonJS example");
console.log("PI:", math.PI);
console.log("square(5):", math.square(5));
console.log("areaOfCircle(3):", math.areaOfCircle(3).toFixed(2));
console.log("add(10, 20):", math.add(10, 20));
