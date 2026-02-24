// Destructuring & spread/rest - real-world style examples

// --- 1. Function parameters: get just what you need from objects ---
function printUser({ id, name, role = "user" }) {
  console.log(`User #${id}: ${name} (${role})`);
}

const u = { id: 1, name: "Sam", role: "admin", email: "sam@example.com" };
printUser(u); // ignores extra fields

// --- 2. API response: nested destructuring ---
const response = {
  data: {
    user: { id: 2, name: "Neha" },
  },
  meta: { requestId: "abc-123" },
};

const {
  data: {
    user: { name: userName },
  },
  meta: { requestId },
} = response;

console.log("From response:", userName, requestId);

// --- 3. Config with defaults using destructuring ---
function createConfig(options = {}) {
  const {
    apiUrl = "https://api.example.com",
    timeout = 5000,
    retries = 3,
  } = options;

  return { apiUrl, timeout, retries };
}

console.log(createConfig());
console.log(createConfig({ timeout: 10000 }));

// --- 4. Immutable updates with spread ---
const baseUser = { id: 3, name: "Amit", role: "user" };

const promotedUser = { ...baseUser, role: "admin" };
console.log("Promoted:", promotedUser);
console.log("Original:", baseUser); // unchanged

// update nested data (shallow copy pattern)
const state = {
  user: { id: 1, name: "Sam" },
  settings: { theme: "light", language: "en" },
};

const newState = {
  ...state,
  settings: {
    ...state.settings,
    theme: "dark",
  },
};
console.log("New state:", newState);
console.log("Old state:", state);

// --- 5. Rest in params: collect "the rest" of arguments ---
function log(level, ...messages) {
  console.log(`[${level}]`, messages.join(" "));
}

log("info", "Server", "started", "on", "port", 3000);

// --- 6. Combining arrays/objects with spread ---
const defaultHeaders = { "Content-Type": "application/json" };
const authHeaders = { Authorization: "Bearer token" };
const headers = { ...defaultHeaders, ...authHeaders };
console.log("Headers:", headers);

