const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const userRoutes = require('./routes/userRoutes');
const sessionStore = session.MemoryStore();

const app = express();
const twoDaysMilliseconds = 172800000;

app.use(cors({
  origin: 'http://localhost:3000', // Allow requests only from this origin
  credentials: true // Allow cookies to be sent with requests
}));

app.use(json()); // Body parser middleware

app.use(session({
  key: 'user_sid',
  secret: 'your_secret_key',
  store: sessionStore,
  resave: false,
  saveUninitialized: false,
  cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 2, // 2 days
      httpOnly: true,
      secure: false, // Set to true in production if using HTTPS
      sameSite: 'lax' // Adjust sameSite attribute as needed
  }
}));

app.use('/auth', userRoutes);

app.get('/protectedRoute', (req, res) => {
  if (req.session && req.session.authenticated) {
    const userId = req.session.userId;
    const username = req.session.username;
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.json({ authenticated: true, userId, username });
  } else {
    console.log(req.session)
    res.status(401).json({ authenticated: false, message: 'Unauthorized' });
  }
});

const port = 5000;
app.listen(port, () => {
  console.log('Listening on port', port);
});
