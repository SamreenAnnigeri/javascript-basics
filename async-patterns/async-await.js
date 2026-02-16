// Async/await - write async code that looks synchronous (uses Promises under the hood)

function getStudent(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: "Priya", rollNo: 101 });
    }, 300);
  });
}

function getGrades(rollNo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ rollNo, marks: [85, 90, 78] });
    }, 300);
  });
}

function getReportCard(marks) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const total = marks.reduce((a, b) => a + b, 0);
      resolve({ total, percentage: (total / (marks.length * 100)) * 100 });
    }, 300);
  });
}

async function fetchStudentReport(studentId) {
  try {
    const student = await getStudent(studentId);
    console.log("Student:", student.name);

    const grades = await getGrades(student.rollNo);
    console.log("Grades:", grades.marks);

    const report = await getReportCard(grades.marks);
    console.log("Report:", report);

    return report;
  } catch (err) {
    console.error("Error:", err);
  }
}

// call async function (returns a Promise)
fetchStudentReport(1);
