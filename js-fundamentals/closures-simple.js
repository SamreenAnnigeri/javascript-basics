// Closures - simple examples

// Function "remembers" the variable from outer scope
function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2

// Private variable via closure
function createPerson(name) {
  let age = 0;
  return {
    getName: () => name,
    setAge: (n) => (age = n),
    getAge: () => age,
  };
}

const p = createPerson("Sam");
p.setAge(28);
console.log(p.getName(), p.getAge());
