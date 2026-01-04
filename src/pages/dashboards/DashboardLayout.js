import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, LogOut, Menu, X } from 'lucide-react';
import './DashboardLayout.css';

const DashboardLayout = ({ children, title, subtitle, department }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const departments = [
    { id: 'revenue', name: 'Revenue', path: '/dashboard/revenue' },
    { id: 'reservation', name: 'Reservations', path: '/dashboard/reservation' },
    { id: 'crm', name: 'CRM', path: '/dashboard/crm' },
    { id: 'marketing', name: 'Marketing', path: '/dashboard/marketing' },
    { id: 'finance', name: 'Finance', path: '/dashboard/finance' },
    { id: 'operations', name: 'Operations', path: '/dashboard/operations' },
    { id: 'bd', name: 'Business Dev', path: '/dashboard/bd' },
  ];

  return (
    <div className="dashboard-layout">
      {/* Header */}
      <header className="dashboard-nav">
        <div className="nav-container">
          <div className="nav-left">
            <div className="logo">
              <div className="logo-icon">🌙</div>
              <span className="logo-text">Arabian Nights</span>
            </div>
          </div>

          <nav className={`nav-center ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            {departments.map(dept => (
              <button
                key={dept.id}
                className={`nav-link ${location.pathname === dept.path ? 'active' : ''}`}
                onClick={() => {
                  navigate(dept.path);
                  setMobileMenuOpen(false);
                }}
              >
                {dept.name}
              </button>
            ))}
          </nav>

          <div className="nav-right">
            <button className="icon-btn" onClick={() => navigate('/')}>
              <Home size={20} />
            </button>
            <button className="icon-btn" onClick={() => navigate('/login')}>
              <LogOut size={20} />
            </button>
            <button 
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="dashboard-main">
        <div className="dashboard-header">
          <div className="dashboard-title-section">
            <h1>{title}</h1>
            {subtitle && <p>{subtitle}</p>}
          </div>
        </div>
        
        <div className="dashboard-content">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;

