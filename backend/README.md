# Roamara Backend

This is the backend API for Roamara, an Airbnb-like full-stack platform. It provides RESTful APIs for managing users, listings, reviews, and bookings.

## Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose** (for MongoDB object modeling)

## Features
- User authentication and authorization
- CRUD operations for listings, users, and reviews
- Role-based access control
- RESTful API endpoints
- Error handling and validation

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm

### Installation
1. Navigate to the backend directory
   ```sh
   cd backend
   ```
2. Install dependencies
   ```sh
   npm install
   ```
3. Set up environment variables
   - Copy `.env.example` to `.env`
   - Fill in your MongoDB connection string, JWT secret, etc.

4. Start the server
   ```sh
   npm start
   ```

## Access
- **API Base URL**: `http://localhost:8080` (default port)
- Endpoints:
  - `/api/users` - User management
  - `/api/listings` - Listing management
  - `/api/reviews` - Review management

## Scripts
- `npm start` - Start the server
- `npm run dev` - Start in development mode with nodemon
- `npm test` - Run tests (if implemented)

## Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License
MIT License

## Links
- [Frontend Repository](#)
- [Main Project](#)