// reduce

const users = [
  { id: 1, name: "Sam", age: 28, isActive: true, role: "admin", salary: 80000 },
  {
    id: 2,
    name: "Amit",
    age: 34,
    isActive: false,
    role: "user",
    salary: 50000,
  },
  {
    id: 3,
    name: "Neha",
    age: 25,
    isActive: true,
    role: "manager",
    salary: 90000,
  },
  {
    id: 4,
    name: "Rahul",
    age: 40,
    isActive: true,
    role: "user",
    salary: 60000,
  },
  {
    id: 5,
    name: "Priya",
    age: 30,
    isActive: false,
    role: "admin",
    salary: 100000,
  },
];

// total salary payout
const totalSalary = users.reduce((sum, user) => {
  return sum + user.salary;
}, 0);
console.log("Total Salary:", totalSalary);

// role wise gruping
const groupByRole = users.reduce((acc, user) => {
  acc[user.role] = [];
  acc[user.role].push(user);
  return acc;
}, {});
console.log("Group By Role", groupByRole);

// count Active vs Inactive users
const statusCount = users.reduce(
  (acc, user) => {
    user.isActive ? acc.active++ : acc.inactive++;
    return acc;
  },
  { active: 0, inactive: 0 },
);
console.log("Status Count:", statusCount);

// highest paid employee
const highestPaid = users.reduce((max, user) => {
  return user.salary > max.salary ? user : max;
});
console.log("Highest Paid", highestPaid);

// lookup map by id
const byId = users.reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {});
console.log("Lookup map by id", byId);
