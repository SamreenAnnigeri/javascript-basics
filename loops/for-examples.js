// for, for...of, for...in - different loop types and when to use them

const employees = [
  { id: 1, name: "Sam", department: "Engineering", salary: 80000 },
  { id: 2, name: "Bhagya", department: "Sales", salary: 60000 },
  { id: 3, name: "Neha", department: "Engineering", salary: 90000 },
  { id: 4, name: "Sushma", department: "HR", salary: 55000 },
];

const student = {
  name: "Priya",
  rollNo: 101,
  grade: "A",
  subjects: ["Math", "Science", "English"],
};

// --- for (index-based, full control) ---
// Use when: you need index, need to skip/break, or iterate backwards

console.log("--- for loop ---");
for (let i = 0; i < employees.length; i++) {
  console.log(`${i + 1}. ${employees[i].name} - ${employees[i].department}`);
}

// loop backwards (e.g. reverse order list)
console.log("Employees reverse order:");
for (let i = employees.length - 1; i >= 0; i--) {
  console.log(employees[i].name);
}

// skip every other (e.g. every 2nd employee)
console.log("Every other employee:");
for (let i = 0; i < employees.length; i += 2) {
  console.log(employees[i].name);
}

// --- for...of (values of iterables) ---
// Use when: you want each value from array, string, Set, Map values

console.log("\n--- for...of loop ---");
for (const employee of employees) {
  console.log(`${employee.name} earns $${employee.salary}`);
}

// works with array of strings (e.g. student subjects)
for (const subject of student.subjects) {
  console.log("Subject:", subject);
}

// --- for...in (keys of object) ---
// Use when: you want to loop over object property names (keys)

console.log("\n--- for...in loop ---");
for (const key in student) {
  console.log(`${key}: ${student[key]}`);
}

// ⚠️ for...in on arrays gives indices (as strings), not values - prefer for or for...of for arrays
console.log("for...in on employees array (gives indices):");
for (const index in employees) {
  console.log(index, typeof index); // "0", "1", "2", "3" - string!
}
