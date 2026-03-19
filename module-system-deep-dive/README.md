## Module System Deep Dive

This folder shows clear, side-by-side examples of:

- **ES Modules (ESM)** using `import` / `export`
- **CommonJS (CJS)** using `require` / `module.exports`

---

## 1) ES Modules

Files:

- `es-modules/math.mjs`
- `es-modules/app.mjs`

Run:

```bash
node module-system-deep-dive/es-modules/app.mjs
```

Key syntax:

- `export const ...`
- `export default ...`
- `import add, { PI, square } from "./math.mjs"`

---

## 2) CommonJS

Files:

- `commonjs/math.cjs`
- `commonjs/app.cjs`

Run:

```bash
node module-system-deep-dive/commonjs/app.cjs
```

Key syntax:

- `module.exports = ...`
- `const math = require("./math.cjs")`

---

## Main Differences (Quick)

- **Syntax**: ESM uses `import/export`; CJS uses `require/module.exports`.
- **Loading style**: ESM is static (analyzable before execution); CJS is dynamic at runtime.
- **Default in modern frontend tooling**: ESM.
- **Node compatibility tip**:
  - `.mjs` is treated as ESM.
  - `.cjs` is treated as CommonJS.
  - This avoids needing `"type": "module"` in `package.json`.
