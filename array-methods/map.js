// map- Transformation

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

// Return array of only user names
const userNames = users.map((user) => user.name);
console.log("User Names", userNames);

// create new array with salary hike of 10%
const updatedSalary = users.map((user) => ({
  ...user,
  salary: user.salary * 1.1,
}));
console.log("Updated Salary", updatedSalary);

// convert to API response format
const updatedFormat = users.map((user) => ({
  userId: user.id,
  fullName: user.name,
  status: user.isActive === true ? "ACTIVE" : "INACTIVE",
}));
console.log("Updated Format", updatedFormat);
