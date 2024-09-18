const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }
  const data = fs.readFileSync(path, 'utf8');
  const lines = data.split('\n').filter(line => line.trim() !== '');
  const [headers, ...rows] = lines;
  const headerArray = headers.split(',');
  const firstNameIndex = headerArray.indexOf('firstname');
  const fieldIndex = headerArray.indexOf('field');
  const studentsByField = {};
  let totalStudents = 0;
  rows.forEach(row => {
    const columns = row.split(',').map(cell => cell.trim());
    const firstName = columns[firstNameIndex];
    const field = columns[fieldIndex];
    if (firstName && field) {
      totalStudents += 1;
      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(firstName);
    }
  });
  console.log(`Number of students: ${totalStudents}`);
  for (const field in studentsByField) {
    console.log(`Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}`);
  }
}
module.exports = countStudents;
