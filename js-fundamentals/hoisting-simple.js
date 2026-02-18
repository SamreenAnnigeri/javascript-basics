// Hoisting - simple examples

// var is hoisted, so this logs undefined (not an error)
console.log("x:", x);
var x = 10;

// function declaration is hoisted - you can call it before the line it's written
sayHi();
function sayHi() {
  console.log("Hi!");
}

// Loop with var: all timeouts see the same i (3)
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("i =", i), 100);
}
