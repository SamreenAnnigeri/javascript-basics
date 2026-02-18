// Lexical scoping - scope is where code is written (real: request context, config, env)

// --- 1. Request pipeline: outer sets context, inner handlers use it ---
// Like Express middleware or Koa: requestId is in outer scope, logger uses it
const requestId = "req-abc-123";

function handleRequest() {
  const userId = "user-456"; // function scope

  function log(message) {
    // Inner function sees requestId (outer) and userId (parent) - lexical scope
    console.log(`[${requestId}] [${userId}]`, message);
  }

  function fetchUser() {
    const resource = "users"; // only in this block
    log(`Fetching ${resource}`);
    return { id: userId, resource };
  }

  log("Request started");
  return fetchUser();
}

handleRequest();

// --- 2. Config / env: one place, used everywhere inside the module ---
const API_BASE = "https://api.myapp.com";
const API_VERSION = "v1";

function createApiClient() {
  function getUrl(path) {
    return `${API_BASE}/${API_VERSION}${path}`; // reads from outer scope
  }
  return {
    getUsers: () => getUrl("/users"),
    getOrders: () => getUrl("/orders"),
  };
}

const api = createApiClient();
console.log("Users URL:", api.getUsers());
console.log("Orders URL:", api.getOrders());

// --- 3. Block scope: let/const only visible inside { } ---
// e.g. temporary variables inside if/for that shouldn't leak
if (true) {
  const tempCache = new Map();
  tempCache.set("key", "value");
  console.log("Inside block:", tempCache.get("key"));
}
// tempCache is not visible here - avoids polluting scope
