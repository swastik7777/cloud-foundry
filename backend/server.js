// server.js
const express = require('express');
const cors = require('cors');
const sequelize = require('./db');

const app = express();

// Enable CORS for your frontend only
app.use(cors({
  origin: 'https://my-frontend-app.cfapps.us10-001.hana.ondemand.com'
}));

// Optional: parse JSON requests
app.use(express.json());

// Test DB connection
sequelize.authenticate()
  .then(() => console.log('✅ Database connected successfully!'))
  .catch(err => console.error('❌ Unable to connect to the database:', err));

// Sample root route
app.get('/', (req, res) => {
  res.send('Hello World! Database connection test is ready.');
});

// Add the /api/hello route your frontend expects
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
