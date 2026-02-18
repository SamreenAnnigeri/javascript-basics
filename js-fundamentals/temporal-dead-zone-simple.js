// Temporal Dead Zone (TDZ) - simple examples

// let/const are in TDZ until the line they are declared
{
  // console.log(a); // ReferenceError: Cannot access 'a' before initialization
  let a = 5;
  console.log("a:", a); // 5
}

// var is not in TDZ - it logs undefined
{
  console.log("b:", b); // undefined
  var b = 10;
}
