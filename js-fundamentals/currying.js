// Currying - one arg at a time (real: API client, logger, validation, pricing)

// --- 1. API client: base URL first, then endpoint ---
function createApiClient(baseUrl) {
  return function (endpoint) {
    return function (options = {}) {
      const url = `${baseUrl}${endpoint}`;
      return { url, method: options.method || "GET" };
    };
  };
}

const api = createApiClient("https://api.myapp.com");
const getUsers = api("/users");
const getOrders = api("/orders");
console.log(getUsers({ method: "GET" }));
console.log(getOrders({ method: "POST" }));

// --- 2. Logger: level first, then message (partial application) ---
function createLogger(level) {
  return function (message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level.toUpperCase()}] ${message}`);
  };
}

const logInfo = createLogger("info");
const logError = createLogger("error");
logInfo("User logged in");
logError("Payment failed");

// --- 3. Discount calculator: fix discount % first, then apply to price ---
function applyDiscount(discountPercent) {
  return function (price) {
    return price * (1 - discountPercent / 100);
  };
}

const tenPercentOff = applyDiscount(10);
const twentyPercentOff = applyDiscount(20);
console.log("Price 100 after 10% off:", tenPercentOff(100));
console.log("Price 200 after 20% off:", twentyPercentOff(200));

// --- 4. Generic curry helper (2 args) - reusable in codebases ---
function curry(fn) {
  return function (a) {
    return function (b) {
      return fn(a, b);
    };
  };
}

const sum = (a, b) => a + b;
const curriedSum = curry(sum);
console.log("Curried sum 3 + 7:", curriedSum(3)(7));
