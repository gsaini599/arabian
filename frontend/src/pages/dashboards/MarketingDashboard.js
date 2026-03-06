import React from 'react';
import { TrendingUp, Target, Eye, MousePointer } from 'lucide-react';
import DashboardLayout from './DashboardLayout';
import './DepartmentDashboard.css';

const MarketingDashboard = () => {
  const data = {
    totalImpressions: 125680,
    clickThrough: 3.8,
    conversionRate: 12.5,
    activeCampaigns: 8,
    
    campaigns: [
      { id: 1, name: 'Summer Beach Specials', platform: 'Google Ads', impressions: 45200, clicks: 1850, conversions: 245, status: 'active' },
      { id: 2, name: 'Dubai Marina Promotion', platform: 'Facebook', impressions: 32100, clicks: 1120, conversions: 156, status: 'active' },
      { id: 3, name: 'Winter Luxury Package', platform: 'Instagram', impressions: 28400, clicks: 980, conversions: 132, status: 'active' },
      { id: 4, name: 'Business Traveler Special', platform: 'LinkedIn', impressions: 19980, clicks: 750, conversions: 98, status: 'paused' }
    ]
  };

  return (
    <DashboardLayout
      title="Marketing Dashboard"
      subtitle="Track campaigns, performance, and ROI"
      department="marketing"
    >
      <div className="metrics-grid">
        <div className="metric-card primary">
          <div className="metric-icon"><Eye size={32} /></div>
          <div className="metric-content">
            <div className="metric-label">Total Impressions</div>
            <div className="metric-value">{data.totalImpressions.toLocaleString()}</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon" style={{ background: '#d1fae5' }}>
            <MousePointer size={32} color="#10b981" />
          </div>
          <div className="metric-content">
            <div className="metric-label">Click-Through Rate</div>
            <div className="metric-value">{data.clickThrough}%</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon" style={{ background: '#dbeafe' }}>
            <Target size={32} color="#3b82f6" />
          </div>
          <div className="metric-content">
            <div className="metric-label">Conversion Rate</div>
            <div className="metric-value">{data.conversionRate}%</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon" style={{ background: '#fef3c7' }}>
            <TrendingUp size={32} color="#f59e0b" />
          </div>
          <div className="metric-content">
            <div className="metric-label">Active Campaigns</div>
            <div className="metric-value">{data.activeCampaigns}</div>
          </div>
        </div>
      </div>

      <div className="chart-section">
        <h2>Campaign Performance</h2>
        <div className="campaign-list">
          {data.campaigns.map(campaign => (
            <div key={campaign.id} className="list-item">
              <div className="item-main">
                <div className="item-title">{campaign.name}</div>
                <div className="item-details">
                  <span>Platform: {campaign.platform}</span>
                  <span>{campaign.impressions.toLocaleString()} impressions</span>
                  <span>{campaign.clicks.toLocaleString()} clicks</span>
                  <span>{campaign.conversions} conversions</span>
                  <span className={`badge badge-${campaign.status === 'active' ? 'success' : 'warning'}`}>
                    {campaign.status}
                  </span>
                </div>
              </div>
              <div className="item-actions">
                <button className="btn btn-secondary btn-small">Analytics</button>
                <button className="btn btn-primary btn-small">Edit</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="quick-actions">
        <h3>Quick Actions</h3>
        <div className="actions-grid">
          <button className="action-btn">Create New Campaign</button>
          <button className="action-btn">Generate Marketing Report</button>
          <button className="action-btn">Update Listings</button>
          <button className="action-btn">Social Media Schedule</button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MarketingDashboard;


