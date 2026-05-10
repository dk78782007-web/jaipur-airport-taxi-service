# Taxi Passenger Management System

A full-stack web application to manage taxi passenger data, including passenger information, pickup/drop locations, and travel dates.

## Features

- ✅ Add new passengers with complete details
- ✅ View all passengers in a card-based layout
- ✅ Edit passenger information
- ✅ Delete passenger records
- ✅ Responsive and user-friendly UI
- ✅ Real-time data management
- ✅ SQLite database for persistent storage

## Project Structure

```
taxi passenger code/
├── backend/                 # Express.js API server
│   ├── server.js           # Main server file
│   ├── db.js               # Database configuration and queries
│   ├── package.json        # Backend dependencies
│   └── passengers.db       # SQLite database (auto-created)
│
├── frontend/               # React web application
│   ├── public/
│   │   └── index.html      # HTML template
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── PassengerForm.js
│   │   │   ├── PassengerForm.css
│   │   │   ├── PassengerList.js
│   │   │   └── PassengerList.css
│   │   ├── App.js          # Main App component
│   │   ├── App.css         # App styling
│   │   ├── index.js        # React entry point
│   │   └── index.css       # Global styles
│   └── package.json        # Frontend dependencies
│
└── README.md              # This file
```

## Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **SQLite3** - Lightweight database
- **CORS** - Cross-origin resource sharing
- **Body-parser** - Request body parsing

### Frontend
- **React** - UI library
- **Axios** - HTTP client
- **CSS3** - Styling

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:5000`

### Frontend Setup

1. In a new terminal, navigate to the frontend folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   The app will open at `http://localhost:3000`

## Usage

1. **Add Passenger**: Fill in the form with passenger details and click "Add Passenger"
2. **View Passengers**: All passengers are displayed in card format below the form
3. **Edit Passenger**: Click the "✎ Edit" button on any passenger card to modify their information
4. **Delete Passenger**: Click the "✕ Delete" button to remove a passenger record

## API Endpoints

- `GET /api/passengers` - Get all passengers
- `GET /api/passengers/:id` - Get passenger by ID
- `POST /api/passengers` - Create new passenger
- `PUT /api/passengers/:id` - Update passenger
- `DELETE /api/passengers/:id` - Delete passenger
- `GET /api/health` - Health check

## Passenger Data Fields

- **Name** - Passenger's full name
- **Phone** - Contact phone number
- **Pickup Location** - Where to pick up the passenger
- **Drop Location** - Where to drop off the passenger
- **Travel Date** - Date and time of travel

## Development Scripts

### Backend
- `npm start` - Start the server
- `npm run dev` - Start with nodemon (auto-reload)

### Frontend
- `npm start` - Start development server
- `npm run build` - Create production build
- `npm test` - Run tests

## Database Schema

```sql
CREATE TABLE passengers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  pickupLocation TEXT NOT NULL,
  dropLocation TEXT NOT NULL,
  travelDate TEXT NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
)
```

## Troubleshooting

### Port already in use
- Backend runs on port 5000. If occupied, modify the PORT in `backend/server.js`
- Frontend runs on port 3000. If occupied, it will prompt to use a different port

### Connection refused error
- Ensure the backend server is running before starting the frontend
- Check that both services are on the correct ports

### Database issues
- The `passengers.db` file is auto-created in the backend folder on first run
- To reset the database, delete `passengers.db` and restart the server

## Future Enhancements

- User authentication
- Advanced filtering and search
- Export data to CSV/PDF
- Trip history and analytics
- Driver assignment
- Real-time location tracking
- SMS notifications

## License

MIT License

## Support

For issues or questions, please contact the development team.
