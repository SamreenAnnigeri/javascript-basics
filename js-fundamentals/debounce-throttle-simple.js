// Debounce & throttle - simple examples

// --- Debounce: run function AFTER user stops triggering it for some time ---
function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

let debouncedCount = 0;
const debouncedFn = debounce(() => {
  debouncedCount++;
  console.log("Debounced call, count:", debouncedCount);
}, 300);

debouncedFn();
debouncedFn();
debouncedFn(); // Only one log after ~300ms

// --- Throttle: run function at most once every X ms ---
function throttle(fn, interval) {
  let lastTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= interval) {
      lastTime = now;
      fn.apply(this, args);
    }
  };
}

let throttledCount = 0;
const throttledFn = throttle(() => {
  throttledCount++;
  console.log("Throttled call, count:", throttledCount);
}, 300);

// simulate rapid calls
const intervalId = setInterval(() => {
  throttledFn();
}, 50);

setTimeout(() => clearInterval(intervalId), 1000); // stop after 1s

