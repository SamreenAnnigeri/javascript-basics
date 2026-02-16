// Callback - passing a function to run after an async operation completes

const employees = [
  { id: 1, name: "Sam", department: "Engineering" },
  { id: 2, name: "Neha", department: "Sales" },
];

function getEmployeeById(id, callback) {
  setTimeout(() => {
    const employee = employees.find((e) => e.id === id);
    if (employee) {
      callback(null, employee);
    } else {
      callback(new Error("Employee not found"), null);
    }
  }, 500);
}

// usage: error-first callback (err, result)
getEmployeeById(1, (err, employee) => {
  if (err) {
    console.error("Error:", err.message);
    return;
  }
  console.log("Employee:", employee);
});

getEmployeeById(99, (err, employee) => {
  if (err) {
    console.error("Error:", err.message);
    return;
  }
  console.log("Employee:", employee);
});
