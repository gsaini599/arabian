import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3001',
  credentials: true
}));
app.use(express.json());

const PORT = process.env.PORT || 4000;

// Health check endpoint
app.get('/ping', async (req, res) => {
  res.json({ message: 'pong', timestamp: new Date().toISOString() });
});

// Authentication endpoints
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password, userType } = req.body;

    if (!email || !password) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email and password are required' 
      });
    }

    // For demo purposes, we'll use mock authentication
    // In production, you'd verify against Supabase Auth or your database
    const mockUsers = [
      {
        id: '1',
        email: 'owner@demo.com',
        password: 'owner123',
        userType: 'owner',
        name: 'Property Owner'
      },
      {
        id: '2',
        email: 'admin@demo.com',
        password: 'admin123',
        userType: 'admin',
        name: 'Admin User'
      }
    ];

    const user = mockUsers.find(u => 
      u.email === email && 
      u.password === password && 
      u.userType === userType
    );

    if (!user) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid credentials or user type' 
      });
    }

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    res.json({
      success: true,
      message: 'Login successful',
      user: userWithoutPassword,
      token: 'mock-jwt-token-' + user.id
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
});

app.post('/api/auth/logout', (req, res) => {
  res.json({
    success: true,
    message: 'Logout successful'
  });
});

app.get('/api/auth/me', (req, res) => {
  // Mock protected route - in production, verify JWT token
  res.json({
    success: true,
    user: {
      id: '1',
      email: 'owner@demo.com',
      userType: 'owner',
      name: 'Property Owner'
    }
  });
});

app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
