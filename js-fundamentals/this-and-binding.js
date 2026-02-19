// this & binding - real-world examples

// --- 1. Event handler / callback: this is lost (use bind or arrow) ---
const button = {
  label: "Submit",
  clicked() {
    console.log("Clicked:", this.label);
  },
};
// In DOM: button.clicked() would work. If you do:
// element.addEventListener("click", button.clicked);  // this = element, not button
// Fix: element.addEventListener("click", button.clicked.bind(button));

const boundClicked = button.clicked.bind(button);
boundClicked(); // Clicked: Submit

// --- 2. Class-like pattern: methods need correct this ---
function createOrder(id) {
  return {
    id,
    items: [],
    addItem(name, price) {
      this.items.push({ name, price });
      return this; // chainable
    },
    total() {
      return this.items.reduce((sum, i) => sum + i.price, 0);
    },
  };
}

const order = createOrder(1);
order.addItem("Book", 10).addItem("Pen", 2);
console.log("Order total:", order.total());

// --- 3. call/apply: borrow a method from another object ---
const employee = { name: "Amit", department: "Engineering" };
const project = { name: "Alpha", department: "Product" };

function logInfo() {
  console.log(this.name, "-", this.department);
}
logInfo.call(employee); // Amit - Engineering
logInfo.call(project);  // Alpha - Product

// --- 4. bind: fix this so a method can be passed as callback ---
const logger = {
  prefix: "[APP]",
  log(message) {
    console.log(this.prefix, message);
  },
};

const boundLog = logger.log.bind(logger);
setTimeout(() => boundLog("Started"), 100); // [APP] Started

// --- 5. Arrow in callback: keeps outer this (e.g. setInterval in object) ---
const counter = {
  count: 0,
  start() {
    setInterval(() => {
      this.count++;
      console.log("Count:", this.count); // this = counter (lexical)
    }, 500);
  },
};
// counter.start(); // uncomment to see count (will run forever)
console.log("Arrow keeps outer this in setInterval callback.");
