// Prototypes & inheritance - simple examples

// 1. Constructor function + prototype method
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log("Hello, I am", this.name);
};

const p1 = new Person("Sam");
p1.greet(); // Hello, I am Sam

// 2. Inheritance with Object.create
function Employee(name, role) {
  Person.call(this, name); // call parent constructor
  this.role = role;
}

// Link Employee.prototype to Person.prototype
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.describe = function () {
  console.log(this.name, "works as", this.role);
};

const e1 = new Employee("Neha", "Developer");
e1.greet(); // from Person.prototype
e1.describe(); // from Employee.prototype

// 3. Prototype chain inspection
console.log(Object.getPrototypeOf(e1) === Employee.prototype); // true
console.log(Object.getPrototypeOf(Employee.prototype) === Person.prototype); // true

