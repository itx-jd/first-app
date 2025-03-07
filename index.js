// Import the Express library
const express = require('express');

// Create an instance of an Express app
const app = express();

// Define a port number
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Create a simple GET route
app.get('/', (req, res) => {
  res.send('Hello, Worlds!');
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

