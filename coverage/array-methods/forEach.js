// using foreach
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
    age: 50,
    isActive: false,
    role: "admin",
    salary: 100000,
  },
];

const activeUsers = [];
const adminUsers = [];
const updatedUser = [];

let result = users.forEach((item) => {
  // push active user names
  if (item.isActive === true) {
    activeUsers.push(item.name);
  }

  // add isSenior if age> 35
  if (item.age > 35) {
    item.isSenior = true;
  }

  // push all admin user into a seperate array
  if (item.role == "admin") {
    adminUsers.push(item);
  }
});

console.log("Active Users list:", activeUsers);
console.log("Updated users list:", users);
console.log("Admin User list", adminUsers);
