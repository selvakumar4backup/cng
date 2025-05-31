// server.js
const express = require('express');
const path = require('path');
const mongoose = require('mongoose'); // If you're using Mongoose
require('dotenv').config(); // Optional: if you're using .env files

const app = express();

// Connect to MongoDB (customize this part for your DB)
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/your-db-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB error:', err));

// Middleware to parse JSON requests
app.use(express.json());

// --- Step 4: Serve React build folder ---
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
