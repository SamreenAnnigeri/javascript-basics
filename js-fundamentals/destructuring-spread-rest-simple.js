// Destructuring & spread/rest - simple examples

// 1. Array destructuring
const colors = ["red", "green", "blue"];
const [first, second] = colors;
console.log(first, second); // red green

// skip items and use rest
const [primary, , tertiary, ...restColors] = [
  "red",
  "green",
  "blue",
  "yellow",
  "pink",
];
console.log(primary, tertiary); // red blue
console.log(restColors); // ["yellow", "pink"]

// 2. Object destructuring
const user = { name: "Sam", age: 28, role: "admin" };
const { name, age } = user;
console.log(name, age); // Sam 28

// rename and default values
const { role: userRole = "guest", city = "Unknown" } = user;
console.log(userRole, city); // admin Unknown

// 3. Spread with arrays
const moreColors = ["yellow", "pink"];
const allColors = [...colors, ...moreColors];
console.log(allColors);

// 4. Spread with objects (shallow copy)
const userCopy = { ...user, active: true };
console.log(userCopy);

