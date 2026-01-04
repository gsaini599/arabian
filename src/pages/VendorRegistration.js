import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, MapPin, DollarSign, FileText } from 'lucide-react';
import './VendorRegistration.css';

const VendorRegistration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    category: '',
    location: '',
    serviceArea: '',
    description: '',
    services: [],
    pricing: '',
    experience: '',
    availability: '',
    license: '',
    insurance: '',
    portfolio: '',
    references: '',
    agreeToTerms: false,
  });

  const categories = [
    'Cleaning Services',
    'Maintenance & Repairs',
    'Photography & Videography',
    'Transportation Services',
    'Landscaping & Gardening',
    'Interior Design',
    'Security Services',
    'Concierge Services',
    'Other'
  ];

  const serviceOptions = {
    'Cleaning Services': ['Deep Cleaning', 'Standard Cleaning', 'Laundry', 'Move-out Cleaning'],
    'Maintenance & Repairs': ['Plumbing', 'Electrical', 'HVAC', 'General Repairs', 'Painting'],
    'Photography & Videography': ['Property Photography', 'Video Tours', 'Drone Photography', 'Editing'],
    'Transportation Services': ['Airport Transfer', 'City Tours', 'Private Driver', 'Car Rental'],
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleServiceToggle = (service) => {
    setFormData({
      ...formData,
      services: formData.services.includes(service)
        ? formData.services.filter(s => s !== service)
        : [...formData.services, service]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Vendor registration:', formData);
    // In real app, submit to backend
    alert('Thank you for registering! We will review your application and get back to you within 48 hours.');
    navigate('/vendors');
  };

  return (
    <div className="vendor-registration">
      <div className="registration-container">
        <div className="registration-header">
          <h1>Join Our Vendor Network</h1>
          <p>Connect with property owners and grow your business</p>
        </div>

        <form onSubmit={handleSubmit} className="registration-form">
          {/* Business Information */}
          <section className="form-section">
            <div className="section-header">
              <Briefcase size={24} />
              <h2>Business Information</h2>
            </div>

            <div className="form-group">
              <label className="form-label">Business Name *</label>
              <input
                type="text"
                name="businessName"
                className="form-input"
                placeholder="Your Company Name"
                value={formData.businessName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Contact Person *</label>
                <input
                  type="text"
                  name="contactName"
                  className="form-input"
                  placeholder="John Doe"
                  value={formData.contactName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email *</label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="contact@business.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                className="form-input"
                placeholder="+971 XX XXX XXXX"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </section>

          {/* Service Details */}
          <section className="form-section">
            <div className="section-header">
              <MapPin size={24} />
              <h2>Service Details</h2>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Category *</label>
                <select
                  name="category"
                  className="form-select"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select category</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Primary Location *</label>
                <input
                  type="text"
                  name="location"
                  className="form-input"
                  placeholder="Dubai, UAE"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Service Area Coverage</label>
              <input
                type="text"
                name="serviceArea"
                className="form-input"
                placeholder="e.g., Dubai, Sharjah, Abu Dhabi"
                value={formData.serviceArea}
                onChange={handleChange}
              />
              <small className="form-hint">List all areas where you provide services</small>
            </div>

            {formData.category && serviceOptions[formData.category] && (
              <div className="form-group">
                <label className="form-label">Services Offered *</label>
                <div className="services-checkbox-grid">
                  {serviceOptions[formData.category].map(service => (
                    <label key={service} className="service-checkbox">
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service)}
                        onChange={() => handleServiceToggle(service)}
                      />
                      <span>{service}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            <div className="form-group">
              <label className="form-label">Business Description *</label>
              <textarea
                name="description"
                className="form-textarea"
                placeholder="Tell us about your business, experience, and what makes you unique..."
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
          </section>

          {/* Pricing & Availability */}
          <section className="form-section">
            <div className="section-header">
              <DollarSign size={24} />
              <h2>Pricing & Availability</h2>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Pricing Range *</label>
                <select
                  name="pricing"
                  className="form-select"
                  value={formData.pricing}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select range</option>
                  <option value="$">$ - Budget Friendly</option>
                  <option value="$$">$$ - Moderate</option>
                  <option value="$$$">$$$ - Premium</option>
                  <option value="$$$$">$$$$ - Luxury</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Years of Experience *</label>
                <input
                  type="number"
                  name="experience"
                  className="form-input"
                  min="0"
                  placeholder="5"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Availability *</label>
              <select
                name="availability"
                className="form-select"
                value={formData.availability}
                onChange={handleChange}
                required
              >
                <option value="">Select availability</option>
                <option value="24/7">24/7 - Emergency Service</option>
                <option value="business">Business Hours (9 AM - 6 PM)</option>
                <option value="flexible">Flexible Hours</option>
                <option value="appointment">By Appointment Only</option>
              </select>
            </div>
          </section>

          {/* Documentation */}
          <section className="form-section">
            <div className="section-header">
              <FileText size={24} />
              <h2>Documentation & Credentials</h2>
            </div>

            <div className="form-group">
              <label className="form-label">Business License Number</label>
              <input
                type="text"
                name="license"
                className="form-input"
                placeholder="License number"
                value={formData.license}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Insurance Provider</label>
              <input
                type="text"
                name="insurance"
                className="form-input"
                placeholder="Insurance company name"
                value={formData.insurance}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Portfolio/Website URL</label>
              <input
                type="url"
                name="portfolio"
                className="form-input"
                placeholder="https://yourwebsite.com"
                value={formData.portfolio}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label">References</label>
              <textarea
                name="references"
                className="form-textarea"
                placeholder="Provide contact information for 2-3 professional references..."
                value={formData.references}
                onChange={handleChange}
              />
            </div>
          </section>

          {/* Terms */}
          <div className="terms-section">
            <label className="terms-checkbox">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                required
              />
              <span>
                I agree to the Arabian Nights Vendor Terms & Conditions and understand that
                my application will be reviewed before approval. I agree to maintain professional
                standards and provide quality services to property owners. *
              </span>
            </label>
          </div>

          {/* Submit */}
          <div className="submit-section">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate('/vendors')}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary btn-large"
              disabled={!formData.agreeToTerms}
            >
              Submit Application
            </button>
          </div>
        </form>

        {/* Benefits */}
        <div className="benefits-section">
          <h3>Why Join Arabian Nights Vendor Network?</h3>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">🎯</div>
              <h4>Direct Access</h4>
              <p>Connect directly with property owners who need your services</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">📈</div>
              <h4>Grow Your Business</h4>
              <p>Expand your client base and increase revenue</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🤝</div>
              <h4>Trusted Network</h4>
              <p>Be part of a verified, professional service provider community</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">⚡</div>
              <h4>Fast Payments</h4>
              <p>Receive payments quickly through our secure platform</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorRegistration;

