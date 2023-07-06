// Import required packages
const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');

// Set up Express application
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/youtube_clone', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.log('MongoDB connection error:', error));

// Set up video upload middleware using Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Define video model using Mongoose
const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  filePath: String,
});

const Video = mongoose.model('Video', videoSchema);

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to the YouTube clone!');
});

app.post('/upload', upload.single('video'), async (req, res) => {
  try {
    const { title, description } = req.body;
    const filePath = req.file.path;

    const video = new Video({
      title,
      description,
      filePath
    });

    await video.save();

    res.status(200).json({ message: 'Video uploaded successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Error uploading video.' });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
