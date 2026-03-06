import React from 'react';
import { Wrench, CheckCircle, AlertCircle, Clock } from 'lucide-react';
import DashboardLayout from './DashboardLayout';
import './DepartmentDashboard.css';

const OperationsDashboard = () => {
  const data = {
    activeProperties: 156,
    maintenanceTasks: 23,
    completedToday: 12,
    avgResponseTime: '45min',
    
    tasks: [
      { id: 1, property: 'Marina Heights Villa', task: 'HVAC Maintenance', priority: 'high', assignedTo: 'QuickFix Maintenance', status: 'in-progress' },
      { id: 2, property: 'Downtown Penthouse', task: 'Deep Cleaning', priority: 'normal', assignedTo: 'Premium Cleaning', status: 'scheduled' },
      { id: 3, property: 'Beach Resort Studio', task: 'Plumbing Repair', priority: 'urgent', assignedTo: 'Emergency Plumbing', status: 'in-progress' },
      { id: 4, property: 'City Center Apartment', task: 'Routine Inspection', priority: 'normal', assignedTo: 'Home Care Maintenance', status: 'pending' }
    ]
  };

  return (
    <DashboardLayout
      title="Operations Dashboard"
      subtitle="Manage property maintenance, cleaning, and operations (Admin-1 Access)"
      department="operations"
    >
      <div className="metrics-grid">
        <div className="metric-card primary">
          <div className="metric-icon"><Wrench size={32} /></div>
          <div className="metric-content">
            <div className="metric-label">Active Properties</div>
            <div className="metric-value">{data.activeProperties}</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon" style={{ background: '#fef3c7' }}>
            <AlertCircle size={32} color="#f59e0b" />
          </div>
          <div className="metric-content">
            <div className="metric-label">Pending Tasks</div>
            <div className="metric-value">{data.maintenanceTasks}</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon" style={{ background: '#d1fae5' }}>
            <CheckCircle size={32} color="#10b981" />
          </div>
          <div className="metric-content">
            <div className="metric-label">Completed Today</div>
            <div className="metric-value">{data.completedToday}</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon" style={{ background: '#dbeafe' }}>
            <Clock size={32} color="#3b82f6" />
          </div>
          <div className="metric-content">
            <div className="metric-label">Avg Response Time</div>
            <div className="metric-value">{data.avgResponseTime}</div>
          </div>
        </div>
      </div>

      <div className="chart-section">
        <h2>Operational Tasks</h2>
        <div className="task-list">
          {data.tasks.map(task => (
            <div key={task.id} className="list-item">
              <div className="item-main">
                <div className="item-title">{task.property} - {task.task}</div>
                <div className="item-details">
                  <span>Assigned: {task.assignedTo}</span>
                  <span className={`badge badge-${
                    task.priority === 'urgent' ? 'danger' : 
                    task.priority === 'high' ? 'warning' : 'info'
                  }`}>
                    {task.priority}
                  </span>
                  <span className={`badge badge-${
                    task.status === 'in-progress' ? 'warning' : 
                    task.status === 'scheduled' ? 'info' : 'success'
                  }`}>
                    {task.status}
                  </span>
                </div>
              </div>
              <div className="item-actions">
                <button className="btn btn-secondary btn-small">Details</button>
                <button className="btn btn-primary btn-small">Update</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="quick-actions">
        <h3>Quick Actions</h3>
        <div className="actions-grid">
          <button className="action-btn">Create Maintenance Request</button>
          <button className="action-btn">Schedule Cleaning</button>
          <button className="action-btn">Vendor Management</button>
          <button className="action-btn">Property Inspection Report</button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default OperationsDashboard;


