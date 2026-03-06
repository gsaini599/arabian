import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, TrendingUp, Calendar, Shield, Globe, Star, CheckCircle, ArrowRight, Menu, X } from 'lucide-react';
import './LandingPage.css';

const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              <div className="logo-icon">🌙</div>
              <span>Arabian Nights</span>
            </div>
            
            <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
              <a href="#how-it-works">How It Works</a>
              <a href="#features">Features</a>
              <a href="#benefits">Benefits</a>
              <Link to="/login" className="btn btn-primary btn-small">Partner With Us</Link>
            </div>
            
            <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Turn Your Property Into a{' '}
              <span className="highlight-text">Thriving Rental Business</span>
            </h1>
            <p className="hero-subtitle">
              We handle everything — listing, marketing, bookings, and guest management across Airbnb, Booking.com, and beyond. You relax and watch your income grow.
            </p>
            <div className="hero-cta">
              <Link to="/hosting-check" className="btn btn-primary btn-large">Get Started Today</Link>
              <a href="#how-it-works" className="btn btn-secondary btn-large">Learn More</a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-value">500+</div>
                <div className="hero-stat-label">Properties Managed</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">95%</div>
                <div className="hero-stat-label">Occupancy Rate</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">$2.5M+</div>
                <div className="hero-stat-label">Revenue Generated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section section-light">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">Four simple steps to start earning more from your property</p>
          
          <div className="steps">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-icon"><CheckCircle size={48} /></div>
              <h3 className="step-title">Complete Hosting Check</h3>
              <p className="step-description">
                Answer a few questions about your property and location. We'll assess your hosting readiness.
              </p>
            </div>
            
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-icon"><Home size={48} /></div>
              <h3 className="step-title">Property Information</h3>
              <p className="step-description">
                Provide details about your property and sign up for a pilot run. No commitment required.
              </p>
            </div>
            
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-icon"><TrendingUp size={48} /></div>
              <h3 className="step-title">We Get to Work</h3>
              <p className="step-description">
                Our team creates listings, handles marketing, manages bookings, and coordinates with guests.
              </p>
            </div>
            
            <div className="step-card">
              <div className="step-number">4</div>
              <div className="step-icon"><Globe size={48} /></div>
              <h3 className="step-title">Track & Earn</h3>
              <p className="step-description">
                Monitor your earnings, bookings, and forecasts through your personalized dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section">
        <div className="container">
          <h2 className="section-title">Everything You Need to Succeed</h2>
          <p className="section-subtitle">Comprehensive property management powered by expertise and technology</p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon" style={{background: '#dbeafe'}}>
                <Calendar size={32} color="#3b82f6" />
              </div>
              <h3>Multi-Platform Listing</h3>
              <p>Your property on Airbnb, Booking.com, and other top platforms simultaneously.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon" style={{background: '#d1fae5'}}>
                <TrendingUp size={32} color="#10b981" />
              </div>
              <h3>Revenue Optimization</h3>
              <p>Dynamic pricing and marketing strategies to maximize your earnings.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon" style={{background: '#fef3c7'}}>
                <Shield size={32} color="#f59e0b" />
              </div>
              <h3>Full Guest Management</h3>
              <p>We handle inquiries, check-ins, issues, and reviews — 24/7.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon" style={{background: '#fee2e2'}}>
                <Star size={32} color="#ef4444" />
              </div>
              <h3>Professional Photography</h3>
              <p>High-quality photos and property descriptions that attract more guests.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon" style={{background: '#e9d5ff'}}>
                <Calendar size={32} color="#a855f7" />
              </div>
              <h3>Smart Calendar Sync</h3>
              <p>iCal integration keeps all your bookings synchronized across platforms.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon" style={{background: '#dbeafe'}}>
                <Globe size={32} color="#3b82f6" />
              </div>
              <h3>Global Payment Support</h3>
              <p>Accept payments from guests worldwide with secure processing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for Owners */}
      <section id="benefits" className="section section-light">
        <div className="container">
          <div className="benefits-content">
            <div className="benefits-text">
              <h2 className="benefits-title">Why Property Owners Choose Us</h2>
              <ul className="benefits-list">
                <li>
                  <CheckCircle size={24} color="#10b981" />
                  <div>
                    <strong>Hands-Free Management</strong>
                    <p>We handle everything while you earn passive income</p>
                  </div>
                </li>
                <li>
                  <CheckCircle size={24} color="#10b981" />
                  <div>
                    <strong>Transparent Dashboard</strong>
                    <p>See your earnings, bookings, and forecasts at a glance</p>
                  </div>
                </li>
                <li>
                  <CheckCircle size={24} color="#10b981" />
                  <div>
                    <strong>Vendor Network</strong>
                    <p>Access vetted service providers for maintenance and cleaning</p>
                  </div>
                </li>
                <li>
                  <CheckCircle size={24} color="#10b981" />
                  <div>
                    <strong>No Hidden Fees</strong>
                    <p>Clear, straightforward pricing with no surprises</p>
                  </div>
                </li>
                <li>
                  <CheckCircle size={24} color="#10b981" />
                  <div>
                    <strong>Expert Team</strong>
                    <p>Dedicated revenue, operations, and marketing specialists</p>
                  </div>
                </li>
                <li>
                  <CheckCircle size={24} color="#10b981" />
                  <div>
                    <strong>Proven Results</strong>
                    <p>Average 40% increase in rental income within 3 months</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="benefits-image">
              <div className="benefits-card-overlay">
                <div className="overlay-card">
                  <div className="overlay-stat">
                    <div className="overlay-stat-value">$12,450</div>
                    <div className="overlay-stat-label">This Month</div>
                    <div className="overlay-stat-change positive">+32% vs last month</div>
                  </div>
                  <div className="overlay-bookings">
                    <div className="overlay-booking-label">Upcoming Bookings</div>
                    <div className="overlay-booking-count">18</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Maximize Your Property's Potential?</h2>
            <p className="cta-text">Join hundreds of property owners earning more with less effort</p>
            <Link to="/hosting-check" className="btn btn-primary btn-large">
              Start Your Free Assessment <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <div className="logo-icon">🌙</div>
                <span className="logo-text">Arabian Nights</span>
              </div>
              <p className="footer-tagline">Your partner in profitable property hosting</p>
            </div>
            
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="#how-it-works">How It Works</a></li>
                <li><a href="#features">Features</a></li>
                <li><Link to="/vendors">Vendor Network</Link></li>
                <li><Link to="/login">Partner Login</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Support</h4>
              <ul>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Connect</h4>
              <ul>
                <li><a href="#instagram">Instagram</a></li>
                <li><a href="#facebook">Facebook</a></li>
                <li><a href="#linkedin">LinkedIn</a></li>
                <li><a href="#email">Email Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 Arabian Nights. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

