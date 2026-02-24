// Shallow vs deep copy - simple examples

const original = {
  name: "Sam",
  age: 28,
  address: {
    city: "Mumbai",
    pin: 400001,
  },
};

// 1. Shallow copy with spread (top-level cloned, nested objects shared)
const shallowCopy = { ...original };
shallowCopy.name = "Neha";
shallowCopy.address.city = "Pune";

console.log("Original after shallow copy change:", original);
console.log("Shallow copy:", shallowCopy);
// name changed only in copy, but address.city changed in BOTH (same nested object)

// 2. Deep copy with JSON (simple cases only)
const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.address.city = "Delhi";

console.log("Original after deep copy change:", original);
console.log("Deep copy:", deepCopy);

