// this & binding - simple examples

// 1. this in a method = the object
const user = {
  name: "Sam",
  greet() {
    console.log("Hello,", this.name);
  },
};
user.greet(); // Hello, Sam

// 2. this lost when function is taken out
const greet = user.greet;
// greet(); // this is undefined (strict) or global - breaks!

// 3. bind: fix this permanently
const boundGreet = user.greet.bind(user);
boundGreet(); // Hello, Sam

// 4. arrow function: this from outer scope (lexical), not where it's called
const obj = {
  name: "Neha",
  greet: () => console.log("Hi,", this.name), // this is not obj!
};
obj.greet(); // Hi, undefined (this = outer scope, e.g. module/global)

// 5. call vs apply - invoke with a specific this (and args)
function sayHi(prefix, suffix) {
  console.log(prefix, this.name, suffix);
}
sayHi.call(user, "->", "<-");   // -> Sam <-
sayHi.apply(user, ["(", ")"]);  // ( Sam )
