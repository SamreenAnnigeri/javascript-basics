// Promises - chain async operations without nesting (then/catch)

function getStudent(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id, name: "Priya", rollNo: 101 });
    }, 300);
  });
}

function getGrades(rollNo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ rollNo, marks: [85, 90, 78] });
    }, 300);
  });
}

function getReportCard(marks) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const total = marks.reduce((a, b) => a + b, 0);
      resolve({ total, percentage: (total / (marks.length * 100)) * 100 });
    }, 300);
  });
}

// Chained then - flat, readable
getStudent(1)
  .then((student) => {
    console.log("Student:", student.name);
    return getGrades(student.rollNo);
  })
  .then((grades) => {
    console.log("Grades:", grades.marks);
    return getReportCard(grades.marks);
  })
  .then((report) => {
    console.log("Report:", report);
  })
  .catch((err) => console.error("Error:", err));

// --- Promise combinators: all, race, allSettled, any ---

const p1 = new Promise((resolve) => setTimeout(() => resolve("p1 done"), 200));
const p2 = new Promise((resolve) => setTimeout(() => resolve("p2 done"), 300));
const p3 = new Promise((_, reject) =>
  setTimeout(() => reject(new Error("p3 failed")), 250)
);

// Promise.all: waits for ALL to fulfill, or rejects fast on the first error
Promise.all([p1, p2])
  .then((values) => {
    console.log("Promise.all values:", values); // ["p1 done", "p2 done"]
  })
  .catch((err) => {
    console.log("Promise.all error:", err.message);
  });

// Promise.race: settles as soon as the FIRST promise settles (fulfill or reject)
Promise.race([p1, p3])
  .then((value) => {
    console.log("Promise.race fulfilled with:", value);
  })
  .catch((err) => {
    console.log("Promise.race rejected with:", err.message);
  });

// Promise.allSettled: waits for ALL, never rejects; gives status for each
Promise.allSettled([p1, p2, p3]).then((results) => {
  console.log(
    "Promise.allSettled results:",
    results.map((r) => ({
      status: r.status,
      value: r.value,
      reason: r.reason && r.reason.message,
    }))
  );
});

// Promise.any: fulfills with the FIRST fulfilled value; rejects if ALL reject
const failFast = new Promise((_, reject) =>
  setTimeout(() => reject(new Error("fast fail")), 100)
);
const succeedLater = new Promise((resolve) =>
  setTimeout(() => resolve("eventual success"), 400)
);

Promise.any([failFast, succeedLater])
  .then((value) => {
    console.log("Promise.any fulfilled with:", value);
  })
  .catch((aggregateError) => {
    console.log("Promise.any AggregateError:", aggregateError.errors);
  });
