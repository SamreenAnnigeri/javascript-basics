// Optional chaining (?.) & nullish coalescing (??) - simple examples

const user = {
  name: "Sam",
  address: {
    city: "Mumbai",
  },
};

// 1. Optional chaining: safely access nested properties
console.log(user.address.city); // Mumbai
console.log(user.profile?.bio); // undefined, no error even though profile is missing

// 2. Optional chaining with arrays and functions
const users = [];
console.log(users[0]?.name); // undefined (no error)

const obj = {
  greet() {
    console.log("Hello");
  },
};
obj.greet?.(); // calls greet if it exists

// 3. Nullish coalescing: only uses default when value is null or undefined
const input1 = 0;
const input2 = null;

console.log(input1 || 10); // 10 (0 is falsy)
console.log(input1 ?? 10); // 0 (0 is not null/undefined)

console.log(input2 ?? "default"); // "default"

