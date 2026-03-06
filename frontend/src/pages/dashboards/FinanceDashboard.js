import React from 'react';
import { DollarSign, CreditCard, FileText, TrendingUp } from 'lucide-react';
import DashboardLayout from './DashboardLayout';
import './DepartmentDashboard.css';

const FinanceDashboard = () => {
  const data = {
    totalRevenue: 4856320,
    outstandingPayments: 125680,
    expenses: 856240,
    netProfit: 3998080,
    
    recentTransactions: [
      { id: 1, type: 'payment', description: 'Owner Payout - John Doe', amount: -8450, date: '2025-01-04', status: 'completed' },
      { id: 2, type: 'income', description: 'Booking Payment - Marina Villa', amount: 12450, date: '2025-01-04', status: 'completed' },
      { id: 3, type: 'expense', description: 'Cleaning Service - Premium Clean', amount: -450, date: '2025-01-03', status: 'completed' },
      { id: 4, type: 'income', description: 'Booking Payment - Downtown Penthouse', amount: 9870, date: '2025-01-03', status: 'pending' }
    ]
  };

  return (
    <DashboardLayout
      title="Finance Dashboard"
      subtitle="Manage payments, invoices, and financial reporting"
      department="finance"
    >
      <div className="metrics-grid">
        <div className="metric-card primary">
          <div className="metric-icon"><DollarSign size={32} /></div>
          <div className="metric-content">
            <div className="metric-label">Total Revenue (YTD)</div>
            <div className="metric-value">${(data.totalRevenue / 1000000).toFixed(2)}M</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon" style={{ background: '#fef3c7' }}>
            <CreditCard size={32} color="#f59e0b" />
          </div>
          <div className="metric-content">
            <div className="metric-label">Outstanding Payments</div>
            <div className="metric-value">${(data.outstandingPayments / 1000).toFixed(0)}K</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon" style={{ background: '#fee2e2' }}>
            <FileText size={32} color="#ef4444" />
          </div>
          <div className="metric-content">
            <div className="metric-label">Total Expenses</div>
            <div className="metric-value">${(data.expenses / 1000).toFixed(0)}K</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon" style={{ background: '#d1fae5' }}>
            <TrendingUp size={32} color="#10b981" />
          </div>
          <div className="metric-content">
            <div className="metric-label">Net Profit</div>
            <div className="metric-value">${(data.netProfit / 1000000).toFixed(2)}M</div>
          </div>
        </div>
      </div>

      <div className="chart-section">
        <h2>Recent Transactions</h2>
        <div className="transaction-list">
          {data.recentTransactions.map(transaction => (
            <div key={transaction.id} className="list-item">
              <div className="item-main">
                <div className="item-title">{transaction.description}</div>
                <div className="item-details">
                  <span style={{ 
                    color: transaction.amount > 0 ? 'var(--success)' : 'var(--danger)',
                    fontWeight: 700 
                  }}>
                    ${Math.abs(transaction.amount).toLocaleString()}
                  </span>
                  <span>Date: {transaction.date}</span>
                  <span className={`badge badge-${transaction.status === 'completed' ? 'success' : 'warning'}`}>
                    {transaction.status}
                  </span>
                </div>
              </div>
              <div className="item-actions">
                <button className="btn btn-secondary btn-small">View</button>
                <button className="btn btn-primary btn-small">Export</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="quick-actions">
        <h3>Quick Actions</h3>
        <div className="actions-grid">
          <button className="action-btn">Process Owner Payouts</button>
          <button className="action-btn">Generate Invoice</button>
          <button className="action-btn">Financial Report</button>
          <button className="action-btn">Tax Documents</button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FinanceDashboard;


