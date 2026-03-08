// Class - simple examples (ES6)

// 1. Basic class with constructor and method
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

const p = new Person("Sam", 28);
p.greet();

// 2. Inheritance with extends and super
class Employee extends Person {
  constructor(name, age, role) {
    super(name, age); // must call super first
    this.role = role;
  }

  greet() {
    super.greet(); // call parent method
    console.log(`I work as ${this.role}`);
  }
}

const emp = new Employee("Neha", 25, "Developer");
emp.greet();

// 3. Static method (on the class, not instances)
class MathUtil {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtil.add(2, 3)); // 5
