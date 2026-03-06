import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HostingAbilityCheck from './pages/HostingAbilityCheck';
import OwnerSignup from './pages/OwnerSignup';
import OwnerDashboard from './pages/OwnerDashboard';
import VendorMarketplace from './pages/VendorMarketplace';
import VendorRegistration from './pages/VendorRegistration';
import RevenueDashboard from './pages/dashboards/RevenueDashboard';
import ReservationDashboard from './pages/dashboards/ReservationDashboard';
import CRMDashboard from './pages/dashboards/CRMDashboard';
import MarketingDashboard from './pages/dashboards/MarketingDashboard';
import FinanceDashboard from './pages/dashboards/FinanceDashboard';
import OperationsDashboard from './pages/dashboards/OperationsDashboard';
import BDDashboard from './pages/dashboards/BDDashboard';
import BookingPage from './pages/BookingPage';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/hosting-check" element={<HostingAbilityCheck />} />
          <Route path="/owner-signup" element={<OwnerSignup />} />
          <Route path="/owner-dashboard" element={<OwnerDashboard />} />
          <Route path="/vendors" element={<VendorMarketplace />} />
          <Route path="/vendor-register" element={<VendorRegistration />} />
          <Route path="/book/:propertyId" element={<BookingPage />} />
          
          {/* Department Dashboards */}
          <Route path="/dashboard/revenue" element={<RevenueDashboard />} />
          <Route path="/dashboard/reservation" element={<ReservationDashboard />} />
          <Route path="/dashboard/crm" element={<CRMDashboard />} />
          <Route path="/dashboard/marketing" element={<MarketingDashboard />} />
          <Route path="/dashboard/finance" element={<FinanceDashboard />} />
          <Route path="/dashboard/operations" element={<OperationsDashboard />} />
          <Route path="/dashboard/bd" element={<BDDashboard />} />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
