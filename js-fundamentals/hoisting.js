// Hoisting - why order of declarations matters (real bugs you might hit in code reviews)

// --- 1. var in a loop with async/callbacks (classic bug) ---
// e.g. attaching click handlers to buttons, or logging in setTimeout/setInterval
var buttons = [{ id: "save" }, { id: "cancel" }, { id: "submit" }];

for (var i = 0; i < buttons.length; i++) {
  setTimeout(function () {
    // All callbacks see the same 'i' (hoisted to function scope) after loop ends
    console.log("Button index (var):", i, "-> id:", buttons[i]?.id); // 3, undefined (or last id)
  }, 100);
}
// Fix in real code: use let i, or pass i into a closure (e.g. IIFE or forEach)

// --- 2. Function declaration: can call before the line where it's defined ---
// Useful when you structure a file with main() at top and helpers below
main();
function main() {
  const config = loadConfig();
  console.log("App started with config:", config);
}
function loadConfig() {
  return { env: "development", apiUrl: "https://api.example.com" };
}

// --- 3. var vs let: var is hoisted and initialized as undefined ---
// In real code, someone might reference a variable before the conditional that sets it
console.log("featureFlag (var):", featureFlag); // undefined
if (process.env.NODE_ENV === "production") {
  var featureFlag = "new-checkout";
}
// With let you'd get ReferenceError if you accessed before declaration (TDZ) - safer
