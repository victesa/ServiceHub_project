const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(json()); 

// Mount the userRoutes under the '/api' namespace
app.use('/auth', userRoutes);

const port = 5000;

app.listen(port, () => {
    console.log('Listening on port', port);
});
