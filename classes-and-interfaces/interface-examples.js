// Interface - JavaScript doesn't have a native "interface" keyword (that's TypeScript).
// We show two patterns: JSDoc for documentation/IDE support, and duck typing.

// --- 1. JSDoc: describe the "shape" (interface) and implement it ---
/**
 * @interface
 * @typedef {{ id: number, name: string, getDisplayName(): string }} IUser
 */

/**
 * @implements {IUser}
 */
class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  getDisplayName() {
    return `${this.name} (#${this.id})`;
  }
}

/**
 * @implements {IUser}
 */
const guestUser = {
  id: 0,
  name: "Guest",
  getDisplayName() {
    return this.name;
  },
};

function printUser(/** @type {IUser} */ user) {
  console.log(user.getDisplayName());
}

printUser(new User(1, "Sam"));
printUser(guestUser);

// --- 2. Duck typing: "if it has the right methods, use it" ---
function isPrintable(obj) {
  return typeof obj?.print === "function";
}

function logPrintable(thing) {
  if (isPrintable(thing)) {
    thing.print();
  } else {
    console.log("Not printable:", thing);
  }
}

const doc = {
  title: "Report",
  print() {
    console.log("Printing:", this.title);
  },
};

const plain = { title: "No print method" };

logPrintable(doc);   // Printing: Report
logPrintable(plain); // Not printable: { title: 'No print method' }

// --- 3. Contract by shape: expect an object with specific keys ---
/**
 * @typedef {{ send(subject: string, body: string): Promise<void> }} EmailSender
 */

/**
 * @param {EmailSender} sender
 * @param {string} to
 */
async function sendWelcomeEmail(sender, to) {
  await sender.send("Welcome", `Hi ${to}, welcome!`);
}

const mockSender = {
  async send(subject, body) {
    console.log("Mock email:", subject, body);
  },
};

sendWelcomeEmail(mockSender, "sam@example.com");
