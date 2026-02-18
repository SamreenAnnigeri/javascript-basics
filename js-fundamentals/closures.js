// Closures - "remember" outer scope (real: rate limiter, cache, private state, debounce)

// --- 1. Rate limiter: closure holds count and last reset time ---
function createRateLimiter(maxRequests, windowMs) {
  let count = 0;
  let windowStart = Date.now();

  return function () {
    const now = Date.now();
    if (now - windowStart >= windowMs) {
      count = 0;
      windowStart = now;
    }
    if (count >= maxRequests) {
      return { allowed: false, retryAfter: windowMs - (now - windowStart) };
    }
    count++;
    return { allowed: true, remaining: maxRequests - count };
  };
}

const limiter = createRateLimiter(2, 1000);
console.log(limiter()); // { allowed: true, remaining: 1 }
console.log(limiter()); // { allowed: true, remaining: 0 }
console.log(limiter()); // { allowed: false, retryAfter: ... }

// --- 2. Simple in-memory cache (closure over Map) ---
function createCache(ttlMs) {
  const store = new Map(); // private to this closure

  return {
    get(key) {
      const entry = store.get(key);
      if (!entry) return undefined;
      if (Date.now() - entry.at > ttlMs) {
        store.delete(key);
        return undefined;
      }
      return entry.value;
    },
    set(key, value) {
      store.set(key, { value, at: Date.now() });
    },
  };
}

const cache = createCache(2000);
cache.set("user:1", { name: "Sam" });
console.log("Cache get:", cache.get("user:1"));
// store is not accessible from outside - encapsulation

// --- 3. Logger with prefix (closure over prefix) ---
function createLogger(prefix) {
  return function (message) {
    console.log(`[${prefix}] ${message}`);
  };
}

const requestLog = createLogger("REQUEST");
const dbLog = createLogger("DB");
requestLog("GET /users");
dbLog("Query: SELECT * FROM users");
