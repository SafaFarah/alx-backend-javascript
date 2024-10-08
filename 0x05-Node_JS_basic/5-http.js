const http = require('http');
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
const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');
    const dbFilePath = process.argv[2];
    try {
      const result = await countStudents(dbFilePath);
      res.end(result);
    } catch (err) {
      res.end(err.message);
    }
  }
});
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});
module.exports = app;
