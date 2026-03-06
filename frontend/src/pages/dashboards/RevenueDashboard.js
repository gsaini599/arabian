import React from 'react';
import { DollarSign, TrendingUp, Calendar, BarChart3 } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import DashboardLayout from './DashboardLayout';
import './DepartmentDashboard.css';

const RevenueDashboard = () => {
  const revenueData = {
    currentMonth: 425680,
    lastMonth: 387420,
    growth: 9.9,
    ytd: 4856320,
    averagePerProperty: 8450,
    topProperty: 'Marina Heights Villa',
    
    monthlyRevenue: [
      { month: 'Jan', revenue: 385000, bookings: 145 },
      { month: 'Feb', revenue: 398000, bookings: 152 },
      { month: 'Mar', revenue: 412000, bookings: 158 },
      { month: 'Apr', revenue: 401000, bookings: 155 },
      { month: 'May', revenue: 425000, bookings: 168 },
      { month: 'Jun', revenue: 426000, bookings: 172 }
    ],
    
    byPlatform: [
      { platform: 'Airbnb', revenue: 185420, percentage: 43.6 },
      { platform: 'Booking.com', revenue: 148280, percentage: 34.8 },
      { platform: 'Direct', revenue: 65340, percentage: 15.4 },
      { platform: 'Others', revenue: 26640, percentage: 6.2 }
    ],
    
    topProperties: [
      { name: 'Marina Heights Villa', revenue: 28450, occupancy: 95 },
      { name: 'Downtown Penthouse', revenue: 24680, occupancy: 92 },
      { name: 'Beach Resort Studio', revenue: 22150, occupancy: 88 },
      { name: 'City Center Apartment', revenue: 19870, occupancy: 85 }
    ]
  };

  return (
    <DashboardLayout
      title="Revenue Dashboard"
      subtitle="Track income, pricing, and financial performance"
      department="revenue"
    >
      {/* Key Metrics */}
      <div className="metrics-grid">
        <div className="metric-card primary">
          <div className="metric-icon">
            <DollarSign size={32} />
          </div>
          <div className="metric-content">
            <div className="metric-label">Current Month Revenue</div>
            <div className="metric-value">${revenueData.currentMonth.toLocaleString()}</div>
            <div className="metric-change positive">
              ↑ {revenueData.growth}% vs last month
            </div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon" style={{ background: '#d1fae5' }}>
            <TrendingUp size={32} color="#10b981" />
          </div>
          <div className="metric-content">
            <div className="metric-label">Year to Date</div>
            <div className="metric-value">${(revenueData.ytd / 1000000).toFixed(2)}M</div>
            <div className="metric-sub">Total revenue generated</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon" style={{ background: '#dbeafe' }}>
            <BarChart3 size={32} color="#3b82f6" />
          </div>
          <div className="metric-content">
            <div className="metric-label">Average Per Property</div>
            <div className="metric-value">${revenueData.averagePerProperty.toLocaleString()}</div>
            <div className="metric-sub">Monthly average</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon" style={{ background: '#fef3c7' }}>
            <Calendar size={32} color="#f59e0b" />
          </div>
          <div className="metric-content">
            <div className="metric-label">Top Performer</div>
            <div className="metric-value-small">{revenueData.topProperty}</div>
            <div className="metric-sub">Highest revenue this month</div>
          </div>
        </div>
      </div>

      {/* Revenue Trend */}
      <div className="chart-section">
        <h2>Revenue Trend</h2>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={revenueData.monthlyRevenue}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="month" stroke="#666" />
            <YAxis stroke="#666" />
            <Tooltip
              contentStyle={{
                background: 'white',
                border: '1px solid #e0e0e0',
                borderRadius: '8px'
              }}
              formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']}
            />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#d4af37"
              strokeWidth={3}
              dot={{ fill: '#d4af37', r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="dashboard-grid-2">
        {/* Platform Performance */}
        <div className="chart-section">
          <h2>Revenue by Platform</h2>
          <div className="platform-list">
            {revenueData.byPlatform.map((item, index) => (
              <div key={index} className="platform-item">
                <div className="platform-info">
                  <div className="platform-name">{item.platform}</div>
                  <div className="platform-amount">${item.revenue.toLocaleString()}</div>
                </div>
                <div className="platform-bar">
                  <div
                    className="platform-bar-fill"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <div className="platform-percentage">{item.percentage}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Properties */}
        <div className="chart-section">
          <h2>Top Performing Properties</h2>
          <div className="properties-list">
            {revenueData.topProperties.map((property, index) => (
              <div key={index} className="property-item">
                <div className="property-rank">#{index + 1}</div>
                <div className="property-info">
                  <div className="property-name">{property.name}</div>
                  <div className="property-stats">
                    <span className="property-revenue">${property.revenue.toLocaleString()}</span>
                    <span className="property-occupancy">{property.occupancy}% occupied</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <h3>Quick Actions</h3>
        <div className="actions-grid">
          <button className="action-btn">Adjust Pricing Strategy</button>
          <button className="action-btn">Generate Revenue Report</button>
          <button className="action-btn">View Payment History</button>
          <button className="action-btn">Export Financial Data</button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default RevenueDashboard;

