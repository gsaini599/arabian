import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DollarSign, Calendar, TrendingUp, MessageSquare, Home, LogOut } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './OwnerDashboard.css';

const OwnerDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isNewUser = location.state?.isNewUser;

  // Mock data - in real app, this would come from API
  const [dashboardData] = useState({
    currentMonth: {
      earnings: 12450,
      change: 32
    },
    onBooks: {
      amount: 8920,
      bookings: 6
    },
    forecast: {
      nextMonth: 14200,
      change: 14
    },
    inquiries: {
      total: 45,
      pending: 12,
      confirmed: 18,
      declined: 15
    },
    earningsHistory: [
      { month: 'Jan', amount: 7800 },
      { month: 'Feb', amount: 8500 },
      { month: 'Mar', amount: 9200 },
      { month: 'Apr', amount: 10100 },
      { month: 'May', amount: 11200 },
      { month: 'Jun', amount: 12450 }
    ],
    properties: [
      {
        id: 1,
        name: 'Luxury Downtown Apartment',
        occupancy: 92,
        nextBooking: '2025-01-05',
        status: 'active'
      }
    ]
  });

  return (
    <div className="owner-dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="dashboard-header-content">
          <div className="logo">
            <div className="logo-icon">🌙</div>
            <span className="logo-text">Arabian Nights</span>
          </div>
          <div className="header-actions">
            <button className="icon-btn" onClick={() => navigate('/vendors')}>
              <Home size={20} />
              <span>Vendors</span>
            </button>
            <button className="icon-btn" onClick={() => navigate('/login')}>
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {isNewUser && (
        <div className="welcome-banner">
          <div className="welcome-content">
            <h2>🎉 Welcome to Arabian Nights!</h2>
            <p>
              Your property registration is complete. Our team will review your information
              and reach out within 24 hours to start your pilot program.
            </p>
          </div>
        </div>
      )}

      <div className="dashboard-container">
        <div className="dashboard-title-section">
          <h1>Your Property Dashboard</h1>
          <p>Track your earnings and bookings at a glance</p>
        </div>

        {/* Key Metrics */}
        <div className="metrics-grid">
          <div className="metric-card primary">
            <div className="metric-icon">
              <DollarSign size={32} />
            </div>
            <div className="metric-content">
              <div className="metric-label">This Month Earnings</div>
              <div className="metric-value">
                ${dashboardData.currentMonth.earnings.toLocaleString()}
              </div>
              <div className="metric-change positive">
                ↑ {dashboardData.currentMonth.change}% vs last month
              </div>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-icon" style={{ background: '#dbeafe' }}>
              <Calendar size={32} color="#3b82f6" />
            </div>
            <div className="metric-content">
              <div className="metric-label">On Books</div>
              <div className="metric-value">
                ${dashboardData.onBooks.amount.toLocaleString()}
              </div>
              <div className="metric-sub">
                {dashboardData.onBooks.bookings} confirmed bookings
              </div>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-icon" style={{ background: '#d1fae5' }}>
              <TrendingUp size={32} color="#10b981" />
            </div>
            <div className="metric-content">
              <div className="metric-label">Next Month Forecast</div>
              <div className="metric-value">
                ${dashboardData.forecast.nextMonth.toLocaleString()}
              </div>
              <div className="metric-change positive">
                ↑ {dashboardData.forecast.change}% projected growth
              </div>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-icon" style={{ background: '#fef3c7' }}>
              <MessageSquare size={32} color="#f59e0b" />
            </div>
            <div className="metric-content">
              <div className="metric-label">Total Inquiries</div>
              <div className="metric-value">{dashboardData.inquiries.total}</div>
              <div className="metric-sub">
                {dashboardData.inquiries.pending} pending responses
              </div>
            </div>
          </div>
        </div>

        {/* Earnings Chart */}
        <div className="chart-section">
          <h2>Earnings Over Time</h2>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dashboardData.earningsHistory}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="month" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip 
                  contentStyle={{
                    background: 'white',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px'
                  }}
                  formatter={(value) => [`$${value}`, 'Earnings']}
                />
                <Line 
                  type="monotone" 
                  dataKey="amount" 
                  stroke="#d4af37" 
                  strokeWidth={3}
                  dot={{ fill: '#d4af37', r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Inquiries Breakdown */}
        <div className="inquiries-section">
          <h2>Inquiry Status</h2>
          <div className="inquiries-grid">
            <div className="inquiry-stat">
              <div className="inquiry-number">{dashboardData.inquiries.pending}</div>
              <div className="inquiry-label">Pending</div>
              <div className="inquiry-bar">
                <div 
                  className="inquiry-bar-fill" 
                  style={{ 
                    width: `${(dashboardData.inquiries.pending / dashboardData.inquiries.total) * 100}%`,
                    background: '#f59e0b'
                  }}
                ></div>
              </div>
            </div>

            <div className="inquiry-stat">
              <div className="inquiry-number">{dashboardData.inquiries.confirmed}</div>
              <div className="inquiry-label">Confirmed</div>
              <div className="inquiry-bar">
                <div 
                  className="inquiry-bar-fill" 
                  style={{ 
                    width: `${(dashboardData.inquiries.confirmed / dashboardData.inquiries.total) * 100}%`,
                    background: '#10b981'
                  }}
                ></div>
              </div>
            </div>

            <div className="inquiry-stat">
              <div className="inquiry-number">{dashboardData.inquiries.declined}</div>
              <div className="inquiry-label">Declined</div>
              <div className="inquiry-bar">
                <div 
                  className="inquiry-bar-fill" 
                  style={{ 
                    width: `${(dashboardData.inquiries.declined / dashboardData.inquiries.total) * 100}%`,
                    background: '#ef4444'
                  }}
                ></div>
              </div>
            </div>
          </div>
          <p className="inquiries-confidence">
            📈 With {dashboardData.inquiries.pending + dashboardData.inquiries.confirmed} active/pending inquiries, 
            your booking pipeline looks strong!
          </p>
        </div>

        {/* Property Status */}
        <div className="property-section">
          <h2>Your Properties</h2>
          {dashboardData.properties.map(property => (
            <div key={property.id} className="property-card">
              <div className="property-info">
                <div className="property-name">{property.name}</div>
                <div className="property-stats">
                  <span className="property-stat">
                    <strong>{property.occupancy}%</strong> occupancy
                  </span>
                  <span className="property-stat">
                    Next booking: <strong>{property.nextBooking}</strong>
                  </span>
                </div>
              </div>
              <div className="property-status">
                <span className="badge badge-success">Active</span>
              </div>
            </div>
          ))}
        </div>

        {/* Need Help Section */}
        <div className="help-section">
          <div className="help-content">
            <h3>Need Additional Services?</h3>
            <p>
              Browse our network of trusted vendors for cleaning, maintenance, 
              photography, and other services.
            </p>
            <button 
              className="btn btn-primary"
              onClick={() => navigate('/vendors')}
            >
              View Vendor Network
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerDashboard;

