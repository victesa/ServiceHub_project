const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
app.use(cors())
const port = 5000;

// Middleware to parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware to parse application/json
app.use(bodyParser.json());

// Endpoint to echo back the request body
app.post('/ie', (req, res) => {
  try {
    // Log the received request body
    console.log('Received request body:', req.body);

    // Send back the received request body as the response
    res.status(200).json(req.body);
  } catch (error) {
    console.error('Error handling request:', error.message);
    res.status(500).json({ error: 'Failed to process request' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
