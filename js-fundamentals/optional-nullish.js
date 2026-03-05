// Optional chaining (?.) & nullish coalescing (??) - real-world style examples

// --- 1. API response: safely accessing deeply nested properties ---
const apiResponse = {
  data: {
    user: {
      id: 1,
      name: "Sam",
    },
  },
  meta: {
    requestId: "abc-123",
  },
};

const userName = apiResponse.data?.user?.name ?? "Guest";
const country = apiResponse.data?.user?.address?.country ?? "Unknown";
console.log("User name:", userName);
console.log("Country:", country);

// --- 2. Config with overrides: keep 0 / '' / false as valid values ---
const defaultConfig = {
  retries: 3,
  timeoutMs: 5000,
};

const envConfig = {
  retries: 0, // valid value, should not fall back to default
};

const effectiveRetries = envConfig.retries ?? defaultConfig.retries;
console.log("Retries:", effectiveRetries); // 0

// --- 3. Optional chaining with functions ---
const feature = {
  onClick: null,
};

feature.onClick?.(); // safely call only if defined

// Later feature gets a handler
feature.onClick = () => console.log("Feature clicked");
feature.onClick?.();

// --- 4. Reading from optional settings ---
const settings = {
  theme: {
    name: "dark",
  },
};

const themeName = settings.theme?.name ?? "light";
console.log("Theme:", themeName);

