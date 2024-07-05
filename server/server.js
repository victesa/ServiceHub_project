const express = require('express');
const { json, urlencoded } = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const path = require('path');
const multer = require('multer');
const userRoutes = require('./routes/userRoutes');
const { getHomeDetails } = require('./controllers/HomeController');
const getAllRequestsForServiceProvider = require('./controllers/RequestController');
const { setupProfile } = require('./controllers/ProfileController');
const { updateProfile } = require('./models/ProfileModel');
const getUserIdFromSession = require('./middleware/userIdSession');
const db = require('./config/db');

const sessionStore = new session.MemoryStore();
const app = express();
const twoDaysMilliseconds = 172800000;

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use("/images", express.static(path.join(__dirname, "images")));

app.use(urlencoded({ extended: true }));
app.use(json());

app.use(session({
  key: 'user_sid',
  secret: 'your_secret_key',
  store: sessionStore,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: twoDaysMilliseconds,
    httpOnly: true,
    secure: false,
    sameSite: 'lax'
  }
}));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Middleware to extract serviceId
function extractServiceId(req, res, next) {
  const { serviceId } = req.body;
  if (!serviceId) {
    return res.status(400).json({ error: 'Service ID not provided.' });
  }
  req.serviceId = serviceId;
  next();
}

// POST endpoint to add a service
app.post('/addService', (req, res) => {
  const { serviceName, price, aboutService } = req.body;

  const query = "INSERT INTO services (provider_id, name, starting_price, about_service) VALUES (?, ?, ?, ?)";
  const userId = req.session.userId; // Assuming userId is stored in session

  db.query(query, [userId, serviceName, price, aboutService], (err, result) => {
    if (err) {
      console.error("Failed to add service:", err);
      return res.status(500).json({ error: 'Failed to add service' });
    }

    const insertedServiceId = result.insertId; // Get the ID of the newly inserted service

    res.status(200).json({ serviceId: insertedServiceId });
  });
});

// POST endpoint to handle image upload
app.post('/imageUpload', extractServiceId, upload.single('image'), (req, res) => {
  const { serviceId } = req;
  const { path: imagePath } = req.file;

  console.log('Service ID:', serviceId); // Check if serviceId is correctly logged
  console.log('Image Path:', imagePath); // Check if imagePath is correctly logged

  const query = 'UPDATE services SET image = ? WHERE service_id = ?';
  const values = [imagePath, serviceId];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error("Failed to upload image:", err);
      return res.status(500).json({ error: err });
    }

    console.log('Database Update Result:', result); // Check the database update result

    res.status(200).json({ message: 'Image uploaded successfully', result });
  });
});

function extractUserData(req, res, next) {
  req.userId = req.session.userId;
  req.bio = req.body.bio;

  if (!req.userId) {
    return res.status(400).json({ error: 'User ID not found in session.' });
  }

  next();
}

app.post('/profileUpload', extractUserData, upload.single('profileImage'), (req, res) => {
  const userId = req.userId;
  const bio = req.bio;

  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded.' });
  }

  const profileImagePath = req.file.path;

  updateProfile(userId, profileImagePath, bio, (err) => {
    if (err) {
      console.error("Error updating profile:", err);
      return res.status(400).json({ error: 'Error updating profile.' });
    }
    res.status(200).json({ message: 'Profile updated successfully.' });
  });
});

app.get("/serviceProviderRequest", (req, res) => {
  const userId = req.session.userId;
  console.log("User ID in serviceProviderRequest:", userId);

  getAllRequestsForServiceProvider(userId, (error, result) => {
    if (error) {
      res.status(500).json(error);
    } else {
      res.status(200).json(result);
    }
  });
});

app.use('/auth', userRoutes);

app.get('/protect', (req, res) => {
  if (req.session && req.session.authenticated) {
    const { userId, username, role } = req.session;
    res.json({ authenticated: true, userId, username, role });
  } else {
    res.status(401).json({ authenticated: false, message: 'Unauthorized' });
  }
});

app.get('/userId', (req, res) => {
  const userId = req.session.userId;
  res.json({ userId });
});

app.post('/clientHomeScreen', getHomeDetails);

app.post('/logOut', (req, res) => {
  req.session.authenticated = false;
  req.session.role = null;
  req.session.userId = null;

  res.status(200).json({ msg: "ok" });
});

app.post('/protectedRoute', (req, res) => {
  if (req.session && req.session.authenticated) {
    const { userId, username, role } = req.session;
    res.json({ authenticated: true, userId, username, role });
  } else {
    res.status(401).json({ authenticated: false, message: 'Unauthorized' });
  }
});

const port = 5000;
app.listen(port, () => {
  console.log('Listening on port', port);
});

app.get('/w', (req, res) => {
  res.json(req.session);
});
