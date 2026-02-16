// Set - stores unique values (no duplicates)

const numbers = [1, 2, 2, 3, 3, 3, 4, 5, 5, 5, 5];
const roles = ["admin", "user", "manager", "user", "admin", "user"];

// remove duplicates from array
const uniqueNumbers = [...new Set(numbers)];
console.log("Unique numbers:", uniqueNumbers);

const uniqueRoles = [...new Set(roles)];
console.log("Unique roles:", uniqueRoles);

// create Set and use methods
const ids = new Set([101, 102, 103, 101, 102]);
console.log("Set size:", ids.size);
console.log("Has 102?", ids.has(102));
ids.add(104);
ids.delete(101);
console.log("After add/delete:", [...ids]);
