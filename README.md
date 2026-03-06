# Nexus Platform

A full-stack property management platform with React frontend and Express.js backend.

## Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

1. **Install dependencies**:
```bash
# Install root dependencies
npm install

# Install backend dependencies
cd backend && npm install

# Install frontend dependencies  
cd ../frontend && npm install
```

2. **Configure environment variables**:

Backend:
```bash
cp backend/.env.example backend/.env
# Edit backend/.env with your configuration
```

Frontend:
```bash
cp frontend/.env.example frontend/.env
# Edit frontend/.env with your configuration
```

3. **Start development servers**:

```bash
# Start both backend and frontend concurrently
npm run dev

# Or start individually:
npm run dev:backend  # Backend on http://localhost:4000
npm run dev:frontend # Frontend on http://localhost:3000
```

## Login Credentials (Demo)

For testing the login functionality:

**Property Owner:**
- Email: `owner@demo.com`
- Password: `owner123`

**Admin Team:**
- Email: `admin@demo.com`  
- Password: `admin123`

## Project Structure

```
nexus-platform/
├── backend/          # Express.js API server
│   ├── src/
│   │   ├── index.ts  # Main server file
│   │   └── supabaseClient.ts
│   └── package.json
├── frontend/         # React application
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── App.js
│   └── package.json
└── package.json      # Root package.json with scripts
```

## API Endpoints

- `POST /api/auth/login` - User authentication
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user info
- `GET /ping` - Health check endpoint

## Features

- ✅ User authentication (Owner/Admin)
- ✅ Responsive UI with modern design
- ✅ CORS configured for frontend-backend communication
- ✅ Mock authentication for demo purposes
- 🚧 Property management dashboards
- 🚧 Booking system
- 🚧 Vendor marketplace

## Development

The frontend runs on port 3000 and the backend on port 4000. Both are configured to work together seamlessly with proper CORS setup.

## Next Steps

To move from demo to production:
1. Set up Supabase project
2. Configure real authentication
3. Replace mock users with database users
4. Add JWT token validation
5. Implement proper session management
