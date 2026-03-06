import React from 'react';
import { Users, Target, TrendingUp, Briefcase } from 'lucide-react';
import DashboardLayout from './DashboardLayout';
import './DepartmentDashboard.css';

const BDDashboard = () => {
  const data = {
    totalPartners: 87,
    activeLeads: 34,
    conversionRate: 28.5,
    newPropertiesMonth: 12,
    
    leads: [
      { id: 1, name: 'Sarah Wilson', property: '4BR Villa in Palm Jumeirah', status: 'hot', lastContact: '2025-01-04', value: '$15K/month' },
      { id: 2, name: 'Michael Chen', property: '2BR Apartment Downtown', status: 'warm', lastContact: '2025-01-03', value: '$8K/month' },
      { id: 3, name: 'Emma Rodriguez', property: 'Luxury Penthouse Marina', status: 'hot', lastContact: '2025-01-02', value: '$22K/month' },
      { id: 4, name: 'James Anderson', property: 'Beach House JBR', status: 'cold', lastContact: '2024-12-28', value: '$12K/month' }
    ]
  };

  return (
    <DashboardLayout
      title="Business Development Dashboard"
      subtitle="Manage partnerships, leads, and growth (Admin-1 Access)"
      department="bd"
    >
      <div className="metrics-grid">
        <div className="metric-card primary">
          <div className="metric-icon"><Briefcase size={32} /></div>
          <div className="metric-content">
            <div className="metric-label">Total Partners</div>
            <div className="metric-value">{data.totalPartners}</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon" style={{ background: '#fef3c7' }}>
            <Target size={32} color="#f59e0b" />
          </div>
          <div className="metric-content">
            <div className="metric-label">Active Leads</div>
            <div className="metric-value">{data.activeLeads}</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon" style={{ background: '#d1fae5' }}>
            <TrendingUp size={32} color="#10b981" />
          </div>
          <div className="metric-content">
            <div className="metric-label">Conversion Rate</div>
            <div className="metric-value">{data.conversionRate}%</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon" style={{ background: '#dbeafe' }}>
            <Users size={32} color="#3b82f6" />
          </div>
          <div className="metric-content">
            <div className="metric-label">New Properties (Month)</div>
            <div className="metric-value">{data.newPropertiesMonth}</div>
          </div>
        </div>
      </div>

      <div className="chart-section">
        <h2>Active Leads Pipeline</h2>
        <div className="lead-list">
          {data.leads.map(lead => (
            <div key={lead.id} className="list-item">
              <div className="item-main">
                <div className="item-title">{lead.name} - {lead.property}</div>
                <div className="item-details">
                  <span>Potential: {lead.value}</span>
                  <span>Last Contact: {lead.lastContact}</span>
                  <span className={`badge badge-${
                    lead.status === 'hot' ? 'danger' : 
                    lead.status === 'warm' ? 'warning' : 'info'
                  }`}>
                    {lead.status}
                  </span>
                </div>
              </div>
              <div className="item-actions">
                <button className="btn btn-secondary btn-small">View</button>
                <button className="btn btn-primary btn-small">Follow Up</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="quick-actions">
        <h3>Quick Actions</h3>
        <div className="actions-grid">
          <button className="action-btn">Add New Lead</button>
          <button className="action-btn">Partner Performance Report</button>
          <button className="action-btn">Schedule Meetings</button>
          <button className="action-btn">Market Analysis</button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BDDashboard;


