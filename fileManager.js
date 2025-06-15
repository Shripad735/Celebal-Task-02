// fileManager.js
const fs = require('fs');
const path = require('path');

// Define file path
const filePath = path.join(__dirname, 'example.txt');

// 1. Create a file
fs.writeFile(filePath, 'Hello from Node.js!', (err) => {
  if (err) throw err;
  console.log('File created successfully.');

  // 2. Read the file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Reading file content:');
    console.log(data);

    // 3. Delete the file
    fs.unlink(filePath, (err) => {
      if (err) throw err;
      console.log('File deleted successfully.');
    });
  });
});