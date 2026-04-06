## JavaScript Basics Playground

This repository is a collection of small, focused JavaScript examples that illustrate core language features and patterns. It is meant as a learning playground: you can open any file, run it with Node, and experiment.

### Structure

- **`js-fundamentals`**: Examples for closures, hoisting, `this` and binding, prototypes/inheritance, destructuring/spread/rest, currying, debounce/throttle, optional chaining/nullish coalescing, and more (each with a `*-simple.js` version alongside a fuller example).
- **`classes-and-interfaces`**: Demonstrations of ES6 classes plus how to express "interfaces" in plain JavaScript using JSDoc typings and duck typing.
- **`array-methods`**: Practical snippets using `map`, `filter`, `reduce`, `forEach`, and `Set`.
- **`async-patterns`**: Callback, callback-hell, promises, and `async/await` patterns.
- **`module-system-deep-dive`**: Side-by-side ES Modules (`import`/`export`) and CommonJS (`require`/`module.exports`) examples with runnable files and notes.
- **`loops`**: Looping constructs such as `for` examples.
- **`index.js`**: Entry point you can temporarily use to import or run specific examples if you want a single starting script.

### Prerequisites

- **Node.js** (any recent LTS is fine, e.g. Node 18+).

No external npm dependencies are required; everything uses plain JavaScript.

### How to Run Examples

- **Run a single file** from the project root:

  ```bash
  node path/to/file.js
  ```

  For example:

  ```bash
  node js-fundamentals/closures.js
  node classes-and-interfaces/interface-examples.js
  node module-system-deep-dive/es-modules/app.mjs
  node module-system-deep-dive/commonjs/app.cjs
  ```

- You can freely modify the examples, add `console.log` calls, or create new files to experiment further.

### Suggested Learning Order

1. **`js-fundamentals`**: Get comfortable with scoping, closures, hoisting, `this`, and prototypes.
2. **`array-methods`**: Practice transforming and aggregating data.
3. **`async-patterns`**: Learn how JavaScript handles asynchronous code.
4. **`module-system-deep-dive`**: Understand ES Modules vs CommonJS and when each style is used.
5. **`classes-and-interfaces`**: See how object-oriented patterns and "interfaces by shape" work in JavaScript.

### Notes

- Files with `*-simple.js` offer a gentler, shorter introduction to a concept before you dive into the more complete version.
- The code favors readability and teaching value over micro-optimizations.

