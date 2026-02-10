// filter

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

// get all active users
const activeUsers = users.filter((item) => item.isActive === true);
console.log("Active Users", activeUsers);

// users earning more than 70K and active
const updatedUsers = users.filter(
  (item) => item.salary > 70000 && item.isActive === true,
);
console.log("Users earning more than 70K", updatedUsers);

// remove all admins
const newUsers = users.filter((item) => item.role != "admin");
console.log("New Array without admin", newUsers);
