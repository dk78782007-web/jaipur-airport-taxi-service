const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize database
db.initializeDatabase();

// Routes

// Get all passengers
app.get('/api/passengers', (req, res) => {
  db.getAllPassengers((err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Get passenger by ID
app.get('/api/passengers/:id', (req, res) => {
  const { id } = req.params;
  db.getPassengerById(id, (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (!row) {
      res.status(404).json({ error: 'Passenger not found' });
      return;
    }
    res.json(row);
  });
});

// Create a new passenger
app.post('/api/passengers', (req, res) => {
  const { name, phone, pickupLocation, dropLocation, travelDate } = req.body;

  if (!name || !phone || !pickupLocation || !dropLocation || !travelDate) {
    res.status(400).json({ error: 'All fields are required' });
    return;
  }

  db.createPassenger(name, phone, pickupLocation, dropLocation, travelDate, (err, id) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(201).json({ id, name, phone, pickupLocation, dropLocation, travelDate });
  });
});

// Update passenger
app.put('/api/passengers/:id', (req, res) => {
  const { id } = req.params;
  const { name, phone, pickupLocation, dropLocation, travelDate } = req.body;

  if (!name || !phone || !pickupLocation || !dropLocation || !travelDate) {
    res.status(400).json({ error: 'All fields are required' });
    return;
  }

  db.updatePassenger(id, name, phone, pickupLocation, dropLocation, travelDate, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ id, name, phone, pickupLocation, dropLocation, travelDate });
  });
});

// Delete passenger
app.delete('/api/passengers/:id', (req, res) => {
  const { id } = req.params;
  db.deletePassenger(id, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: 'Passenger deleted successfully' });
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
