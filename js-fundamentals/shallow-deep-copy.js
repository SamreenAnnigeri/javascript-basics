// Shallow vs deep copy - real-world style examples

const userState = {
  user: {
    id: 1,
    name: "Sam",
  },
  settings: {
    theme: "light",
    language: "en",
  },
};

// --- 1. Shallow copy with spread: only top level is copied ---
const nextStateShallow = { ...userState };
nextStateShallow.settings.theme = "dark";

console.log("Original state (after shallow update):", userState);
console.log("Next state shallow:", nextStateShallow);
// settings is shared reference -> both show theme: 'dark'

// --- 2. Safer pattern: nested spread for immutable updates (still shallow per level) ---
const nextState = {
  ...userState,
  settings: {
    ...userState.settings,
    theme: "dark",
  },
};

console.log("Original state (immutable pattern):", userState);
console.log("Next state (immutable):", nextState);

// --- 3. Deep copy utility (for plain data) using JSON ---
function deepCloneJson(value) {
  return JSON.parse(JSON.stringify(value));
}

const config = {
  api: { url: "https://api.example.com", timeout: 5000 },
  features: { newCheckout: true },
};

const configCopy = deepCloneJson(config);
configCopy.api.timeout = 10000;

console.log("Config original:", config);
console.log("Config copy:", configCopy);

// --- 4. Deep copy with structuredClone (browser / modern Node) ---
// Uncomment if environment supports structuredClone
// const deepClone = structuredClone(config);
// deepClone.features.newCheckout = false;
// console.log("structuredClone original:", config);
// console.log("structuredClone copy:", deepClone);

