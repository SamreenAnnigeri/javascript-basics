// Class - real-world style examples (ES6)

// --- 1. Base class with getters/setters ---
class User {
  constructor(id, firstName, lastName, email) {
    this.id = id;
    this._firstName = firstName;
    this._lastName = lastName;
    this.email = email;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  set fullName(value) {
    const [first, ...rest] = value.split(" ");
    this._firstName = first;
    this._lastName = rest.join(" ") || "";
  }
}

const user = new User(1, "Sam", "Sharma", "sam@example.com");
console.log("Full name:", user.fullName);
user.fullName = "Amit Kumar";
console.log("After set:", user.fullName);

// --- 2. Inheritance: AdminUser extends User ---
class AdminUser extends User {
  constructor(id, firstName, lastName, email, permissions = []) {
    super(id, firstName, lastName, email);
    this.permissions = permissions;
  }

  hasPermission(permission) {
    return this.permissions.includes(permission);
  }
}

const admin = new AdminUser(2, "Neha", "Verma", "neha@example.com", ["read", "write", "delete"]);
console.log("Admin full name:", admin.fullName);
console.log("Has delete?", admin.hasPermission("delete"));

// --- 3. Static method and static property ---
class ApiClient {
  static baseUrl = "https://api.example.com";

  static getUrl(path) {
    return `${this.baseUrl}${path}`;
  }
}

console.log("Users endpoint:", ApiClient.getUrl("/users"));

// --- 4. Private fields (#) - modern JS ---
class Counter {
  #value = 0;

  increment() {
    this.#value++;
  }

  get value() {
    return this.#value;
  }
}

const counter = new Counter();
counter.increment();
counter.increment();
console.log("Counter value:", counter.value);
// counter.#value would be SyntaxError - private
