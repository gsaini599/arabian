import React from 'react';
import { Calendar, Users, CheckCircle, Clock } from 'lucide-react';
import DashboardLayout from './DashboardLayout';
import './DepartmentDashboard.css';

const ReservationDashboard = () => {
  const data = {
    activeBookings: 156,
    checkInsToday: 12,
    checkOutsToday: 8,
    occupancyRate: 87,
    
    upcomingBookings: [
      { id: 1, property: 'Marina Heights Villa', guest: 'John Smith', checkIn: '2025-01-05', nights: 5, status: 'confirmed' },
      { id: 2, property: 'Downtown Penthouse', guest: 'Sarah Johnson', checkIn: '2025-01-06', nights: 3, status: 'confirmed' },
      { id: 3, property: 'Beach Resort Studio', guest: 'Mike Brown', checkIn: '2025-01-07', nights: 7, status: 'pending' },
      { id: 4, property: 'City Center Apartment', guest: 'Emma Davis', checkIn: '2025-01-08', nights: 4, status: 'confirmed' }
    ]
  };

  return (
    <DashboardLayout
      title="Reservation Dashboard"
      subtitle="Manage bookings, check-ins, and calendar synchronization"
      department="reservation"
    >
      <div className="metrics-grid">
        <div className="metric-card primary">
          <div className="metric-icon"><Calendar size={32} /></div>
          <div className="metric-content">
            <div className="metric-label">Active Bookings</div>
            <div className="metric-value">{data.activeBookings}</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon" style={{ background: '#d1fae5' }}>
            <CheckCircle size={32} color="#10b981" />
          </div>
          <div className="metric-content">
            <div className="metric-label">Check-ins Today</div>
            <div className="metric-value">{data.checkInsToday}</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon" style={{ background: '#dbeafe' }}>
            <Clock size={32} color="#3b82f6" />
          </div>
          <div className="metric-content">
            <div className="metric-label">Check-outs Today</div>
            <div className="metric-value">{data.checkOutsToday}</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon" style={{ background: '#fef3c7' }}>
            <Users size={32} color="#f59e0b" />
          </div>
          <div className="metric-content">
            <div className="metric-label">Occupancy Rate</div>
            <div className="metric-value">{data.occupancyRate}%</div>
          </div>
        </div>
      </div>

      <div className="chart-section">
        <h2>Upcoming Bookings</h2>
        <div className="booking-list">
          {data.upcomingBookings.map(booking => (
            <div key={booking.id} className="list-item">
              <div className="item-main">
                <div className="item-title">{booking.property}</div>
                <div className="item-details">
                  <span>Guest: {booking.guest}</span>
                  <span>Check-in: {booking.checkIn}</span>
                  <span>{booking.nights} nights</span>
                  <span className={`badge badge-${booking.status === 'confirmed' ? 'success' : 'warning'}`}>
                    {booking.status}
                  </span>
                </div>
              </div>
              <div className="item-actions">
                <button className="btn btn-secondary btn-small">View Details</button>
                <button className="btn btn-primary btn-small">Manage</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="quick-actions">
        <h3>Quick Actions</h3>
        <div className="actions-grid">
          <button className="action-btn">Sync All Calendars (iCal)</button>
          <button className="action-btn">Export Booking Report</button>
          <button className="action-btn">Block Dates</button>
          <button className="action-btn">Manual Booking Entry</button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ReservationDashboard;


