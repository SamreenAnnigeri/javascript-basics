// Debounce & throttle - real-world style examples

// --- Generic debounce implementation ---
function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// --- Generic throttle implementation ---
function throttle(fn, interval) {
  let lastTime = 0;
  let pendingArgs = null;

  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= interval) {
      lastTime = now;
      fn.apply(this, args);
    } else {
      pendingArgs = args;
      setTimeout(() => {
        const laterNow = Date.now();
        if (laterNow - lastTime >= interval && pendingArgs) {
          lastTime = laterNow;
          fn.apply(this, pendingArgs);
          pendingArgs = null;
        }
      }, interval - (now - lastTime));
    }
  };
}

// --- 1. Debounce: search box API call (simulate) ---
function fetchSearchResults(query) {
  console.log("API call for query:", query);
}

const debouncedSearch = debounce(fetchSearchResults, 300);

debouncedSearch("j");
debouncedSearch("ja");
debouncedSearch("jav");
debouncedSearch("java"); // only this one should trigger after 300ms

// --- 2. Throttle: scroll handler (simulate) ---
function onScroll(position) {
  console.log("Scroll handler at position:", position);
}

const throttledScroll = throttle(onScroll, 200);

let pos = 0;
const scrollIntervalId = setInterval(() => {
  pos += 10;
  throttledScroll(pos);
}, 20);

setTimeout(() => {
  clearInterval(scrollIntervalId);
  console.log("Stopped scroll simulation.");
}, 1200);

