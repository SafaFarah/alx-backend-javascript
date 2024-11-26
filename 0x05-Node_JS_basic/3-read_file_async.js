const fs = require('fs').promises;

async function countStudents(path) {
  try {
    await fs.access(path);
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const [headers, ...rows] = lines;
    const headerArray = headers.split(',');
    const firstNameIndex = headerArray.indexOf('firstname');
    const fieldIndex = headerArray.indexOf('field');
    const studentsByField = {};
    let totalStudents = 0;
    rows.forEach((row) => {
      const columns = row.split(',').map((cell) => cell.trim());
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
      if (Object.prototype.hasOwnProperty.call(studentsByField, field)) {
        console.log(`Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
