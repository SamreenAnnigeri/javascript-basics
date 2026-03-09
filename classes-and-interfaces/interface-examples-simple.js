// Interface - simple examples (JS has no "interface" keyword; we use JSDoc + duck typing)

// 1. JSDoc @typedef describes the "interface" shape
/**
 * @typedef {{ name: string, greet(): void }} Greetable
 */

/** @param {Greetable} obj */
function sayHello(obj) {
  obj.greet();
}

const person = {
  name: "Sam",
  greet() {
    console.log("Hello, I'm", this.name);
  },
};

sayHello(person);

// 2. Duck typing: any object with a .greet method works
const other = {
  name: "Neha",
  greet() {
    console.log("Hi from", this.name);
  },
};

sayHello(other);
