// Callback hell - nested callbacks when you have multiple dependent async steps

function getStudent(id, callback) {
  setTimeout(() => {
    callback(null, { id, name: "Priya", rollNo: 101 });
  }, 300);
}

function getGrades(rollNo, callback) {
  setTimeout(() => {
    callback(null, { rollNo, marks: [85, 90, 78] });
  }, 300);
}

function getReportCard(marks, callback) {
  setTimeout(() => {
    const total = marks.reduce((a, b) => a + b, 0);
    callback(null, { total, percentage: (total / (marks.length * 100)) * 100 });
  }, 300);
}

// Callback hell: each step nested inside the previous callback
getStudent(1, (err, student) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Student:", student.name);

  getGrades(student.rollNo, (err, grades) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Grades:", grades.marks);

    getReportCard(grades.marks, (err, report) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Report:", report);
      // More nesting would make it worse - hard to read and maintain
    });
  });
});
