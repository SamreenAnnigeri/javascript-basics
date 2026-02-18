// Lexical scoping - simple examples

const global = "I am global";

function outer() {
  const outerVar = "outer";

  function inner() {
    const innerVar = "inner";
    console.log(innerVar, outerVar, global); // can use all three
  }

  inner();
}
outer();

// Block scope: a exists only inside the block
if (true) {
  const a = 1;
  console.log("Inside block:", a);
}
// console.log(a); // ReferenceError
