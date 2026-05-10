const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'passengers.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err);
  } else {
    console.log('Connected to SQLite database');
  }
});

// Initialize database schema
function initializeDatabase() {
  db.run(`
    CREATE TABLE IF NOT EXISTS passengers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      pickupLocation TEXT NOT NULL,
      dropLocation TEXT NOT NULL,
      travelDate TEXT NOT NULL,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
      updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `, (err) => {
    if (err) {
      console.error('Error creating table:', err);
    } else {
      console.log('Passengers table initialized');
    }
  });
}

// Get all passengers
function getAllPassengers(callback) {
  db.all('SELECT * FROM passengers ORDER BY createdAt DESC', callback);
}

// Get passenger by ID
function getPassengerById(id, callback) {
  db.get('SELECT * FROM passengers WHERE id = ?', [id], callback);
}

// Create passenger
function createPassenger(name, phone, pickupLocation, dropLocation, travelDate, callback) {
  const query = `
    INSERT INTO passengers (name, phone, pickupLocation, dropLocation, travelDate)
    VALUES (?, ?, ?, ?, ?)
  `;
  db.run(query, [name, phone, pickupLocation, dropLocation, travelDate], function(err) {
    if (err) {
      callback(err);
    } else {
      callback(null, this.lastID);
    }
  });
}

// Update passenger
function updatePassenger(id, name, phone, pickupLocation, dropLocation, travelDate, callback) {
  const query = `
    UPDATE passengers
    SET name = ?, phone = ?, pickupLocation = ?, dropLocation = ?, travelDate = ?, updatedAt = CURRENT_TIMESTAMP
    WHERE id = ?
  `;
  db.run(query, [name, phone, pickupLocation, dropLocation, travelDate, id], callback);
}

// Delete passenger
function deletePassenger(id, callback) {
  db.run('DELETE FROM passengers WHERE id = ?', [id], callback);
}

module.exports = {
  initializeDatabase,
  getAllPassengers,
  getPassengerById,
  createPassenger,
  updatePassenger,
  deletePassenger
};
