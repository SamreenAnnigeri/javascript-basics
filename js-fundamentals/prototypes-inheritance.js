// Prototypes & inheritance - real-world style examples

// --- 1. Base \"Model\" with shared methods via prototype ---
function Model(attrs) {
  this.attrs = attrs || {};
}

Model.prototype.get = function (key) {
  return this.attrs[key];
};

Model.prototype.set = function (key, value) {
  this.attrs[key] = value;
};

Model.prototype.toJSON = function () {
  return { ...this.attrs };
};

// --- 2. User model \"inherits\" from Model ---
function User(attrs) {
  Model.call(this, attrs); // call parent constructor
}

User.prototype = Object.create(Model.prototype);
User.prototype.constructor = User;

User.prototype.getFullName = function () {
  return `${this.get("firstName")} ${this.get("lastName")}`;
};

const user = new User({ firstName: "Sam", lastName: "Sharma", role: "admin" });
console.log("User full name:", user.getFullName());
console.log("User JSON:", user.toJSON());

// --- 3. AdminUser overrides / extends behavior ---
function AdminUser(attrs) {
  User.call(this, attrs);
}

AdminUser.prototype = Object.create(User.prototype);
AdminUser.prototype.constructor = AdminUser;

AdminUser.prototype.isAdmin = function () {
  return this.get("role") === "admin";
};

AdminUser.prototype.toJSON = function () {
  const json = Model.prototype.toJSON.call(this); // call parent implementation
  json.isAdmin = this.isAdmin();
  return json;
};

const admin = new AdminUser({ firstName: "Neha", lastName: "Verma", role: "admin" });
console.log("Admin full name:", admin.getFullName());
console.log("Admin JSON:", admin.toJSON());

// --- 4. ES6 class syntax - sugar over prototypes ---
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name, "makes a noise.");
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name, "barks.");
  }
}

const d = new Dog("Tommy");
d.speak(); // Tommy barks.

