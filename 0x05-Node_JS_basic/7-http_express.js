const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;

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
    let result = `Number of students: ${totalStudents}\n`;
    const fieldEntries = Object.entries(studentsByField);
    fieldEntries.forEach(([field, names]) => {
      result += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
    });
    result = result.replace(/\n$/, '');
    return result;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', async (req, res) => {
  res.write('This is the list of our students\n');
  const dbFilePath = process.argv[2];
  try {
    const result = await countStudents(dbFilePath);
    res.end(result);
  } catch (err) {
    res.status(500).send(`Error: ${err.message}\n`);
  }
});
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
