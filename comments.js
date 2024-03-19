// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Run the server
// $ node comments.js
// Example app listening at http://localhost:3000
// Access the server from web browser
// http://localhost:3000
// Hello World!

