# Copilot Instructions for Taxi Passenger Management App

This is a full-stack taxi passenger management application with a React frontend and Express.js backend.

## Project Overview

- **Frontend**: React application running on port 3000
- **Backend**: Express.js API server running on port 5000
- **Database**: SQLite for data persistence

## Key Files

- `backend/server.js` - Main Express server and API endpoints
- `backend/db.js` - Database configuration and queries
- `frontend/src/App.js` - Main React component
- `frontend/src/components/` - Reusable React components

## Getting Started

1. Install backend dependencies: `cd backend && npm install`
2. Install frontend dependencies: `cd frontend && npm install`
3. Start backend: `cd backend && npm start`
4. Start frontend in new terminal: `cd frontend && npm start`

## Available Features

- Add, read, update, delete passenger records
- View passenger details in a responsive card layout
- Edit mode for updating existing passengers
- Clean and intuitive UI

## Common Tasks

- To modify passenger fields: Edit `backend/db.js` and `frontend/src/components/PassengerForm.js`
- To change styling: Edit CSS files in `frontend/src/`
- To add API endpoints: Modify `backend/server.js` and `backend/db.js`
