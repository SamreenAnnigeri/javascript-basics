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
