import React from 'react';
import { Users, MessageSquare, Phone, Mail } from 'lucide-react';
import DashboardLayout from './DashboardLayout';
import './DepartmentDashboard.css';

const CRMDashboard = () => {
  const data = {
    totalContacts: 2847,
    activeGuests: 156,
    pendingInquiries: 45,
    responseTime: '2.5h',
    
    recentInquiries: [
      { id: 1, name: 'Alice Cooper', property: 'Marina Heights Villa', date: '2025-01-04', status: 'pending' },
      { id: 2, name: 'Bob Wilson', property: 'Downtown Penthouse', date: '2025-01-04', status: 'responded' },
      { id: 3, name: 'Carol Martinez', property: 'Beach Resort Studio', date: '2025-01-03', status: 'converted' },
      { id: 4, name: 'David Lee', property: 'City Center Apartment', date: '2025-01-03', status: 'pending' }
    ]
  };

  return (
    <DashboardLayout
      title="CRM Dashboard"
      subtitle="Manage guest relationships and communications"
      department="crm"
    >
      <div className="metrics-grid">
        <div className="metric-card primary">
          <div className="metric-icon"><Users size={32} /></div>
          <div className="metric-content">
            <div className="metric-label">Total Contacts</div>
            <div className="metric-value">{data.totalContacts.toLocaleString()}</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon" style={{ background: '#d1fae5' }}>
            <MessageSquare size={32} color="#10b981" />
          </div>
          <div className="metric-content">
            <div className="metric-label">Pending Inquiries</div>
            <div className="metric-value">{data.pendingInquiries}</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon" style={{ background: '#dbeafe' }}>
            <Phone size={32} color="#3b82f6" />
          </div>
          <div className="metric-content">
            <div className="metric-label">Active Guests</div>
            <div className="metric-value">{data.activeGuests}</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon" style={{ background: '#fef3c7' }}>
            <Mail size={32} color="#f59e0b" />
          </div>
          <div className="metric-content">
            <div className="metric-label">Avg Response Time</div>
            <div className="metric-value">{data.responseTime}</div>
          </div>
        </div>
      </div>

      <div className="chart-section">
        <h2>Recent Inquiries</h2>
        <div className="inquiry-list">
          {data.recentInquiries.map(inquiry => (
            <div key={inquiry.id} className="list-item">
              <div className="item-main">
                <div className="item-title">{inquiry.name}</div>
                <div className="item-details">
                  <span>Property: {inquiry.property}</span>
                  <span>Date: {inquiry.date}</span>
                  <span className={`badge badge-${
                    inquiry.status === 'converted' ? 'success' : 
                    inquiry.status === 'responded' ? 'info' : 'warning'
                  }`}>
                    {inquiry.status}
                  </span>
                </div>
              </div>
              <div className="item-actions">
                <button className="btn btn-secondary btn-small">View</button>
                <button className="btn btn-primary btn-small">Respond</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="quick-actions">
        <h3>Quick Actions</h3>
        <div className="actions-grid">
          <button className="action-btn">Send Bulk Email</button>
          <button className="action-btn">Export Contacts</button>
          <button className="action-btn">View Guest Reviews</button>
          <button className="action-btn">Generate Report</button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CRMDashboard;

