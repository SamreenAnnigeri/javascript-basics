// Temporal Dead Zone (TDZ) - why "Cannot access before initialization" in real code

// --- 1. Refactor gone wrong: using a constant before it's declared ---
// e.g. you move a block of code up and now reference config before its declaration
function initApp() {
  // console.log(config); // ReferenceError: Cannot access 'config' before initialization
  const config = { apiUrl: "https://api.example.com", timeout: 5000 };
  console.log("Config:", config);
}
initApp();

// --- 2. In a block (e.g. switch or if): same variable name, TDZ until declaration ---
function getStatus(code) {
  switch (code) {
    case 200:
      // console.log(message); // ReferenceError - message not declared in this case yet
      const message = "OK";
      return message;
    case 404:
      const msg = "Not Found";
      return msg;
    default:
      return "Unknown";
  }
}
console.log(getStatus(200));

// --- 3. var is NOT in TDZ: hoisted and initialized as undefined (legacy gotcha) ---
function legacyExample() {
  console.log("oldConfig (var):", oldConfig); // undefined - no error
  if (true) {
    var oldConfig = { env: "prod" };
  }
  return oldConfig;
}
console.log(legacyExample());

// --- 4. Real scenario: circular or out-of-order dependency in same scope ---
// const b = a + 1;  const a = 10;  -> a is in TDZ when b is evaluated
// Fix: declare in order (const a = 10; const b = a + 1;) or split into another function/module

console.log("TDZ: always declare let/const before you use them in the same scope.");
