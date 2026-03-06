import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Upload, Home, User, Mail, Phone, MapPin } from 'lucide-react';
import './OwnerSignup.css';

const OwnerSignup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const hostingData = location.state || {};

  const [formData, setFormData] = useState({
    // Owner Information
    fullName: '',
    email: '',
    phone: '',
    address: '',
    
    // Property Information
    propertyName: '',
    propertyAddress: '',
    propertyType: hostingData.answers?.propertyType?.value || '',
    bedrooms: '',
    bathrooms: '',
    maxGuests: '',
    propertySize: '',
    
    // Property Description
    description: '',
    specialFeatures: '',
    houseRules: '',
    
    // Amenities
    amenities: hostingData.answers?.amenities?.values || [],
    
    // Pricing
    basePrice: '',
    cleaningFee: '',
    
    // Availability
    availableFrom: '',
    minimumStay: '1',
    
    // Photos
    photos: [],
    
    // Agreement
    agreeToPilot: false,
    agreeToTerms: false,
  });

  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    { title: 'Your Information', icon: <User size={24} /> },
    { title: 'Property Details', icon: <Home size={24} /> },
    { title: 'Pricing & Availability', icon: <MapPin size={24} /> },
    { title: 'Photos & Final Steps', icon: <Upload size={24} /> },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleAmenityToggle = (amenity) => {
    setFormData({
      ...formData,
      amenities: formData.amenities.includes(amenity)
        ? formData.amenities.filter(a => a !== amenity)
        : [...formData.amenities, amenity]
    });
  };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData({
      ...formData,
      photos: [...formData.photos, ...files]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would submit to backend
    console.log('Form submitted:', formData);
    navigate('/owner-dashboard', { state: { isNewUser: true } });
  };

  const canProceed = () => {
    switch (currentSection) {
      case 0:
        return formData.fullName && formData.email && formData.phone;
      case 1:
        return formData.propertyName && formData.propertyAddress && formData.bedrooms;
      case 2:
        return formData.basePrice && formData.availableFrom;
      case 3:
        return formData.agreeToPilot && formData.agreeToTerms;
      default:
        return false;
    }
  };

  const amenitiesList = [
    'High-speed WiFi', 'Full Kitchen', 'Washer/Dryer', 'Air Conditioning',
    'Heating', 'Pool', 'Gym', 'Parking', 'TV', 'Workspace',
    'Pet Friendly', 'Smoking Allowed', 'Hot Tub', 'BBQ Grill'
  ];

  const renderSection = () => {
    switch (currentSection) {
      case 0:
        return (
          <div className="form-section">
            <h2>Tell Us About Yourself</h2>
            <p className="section-description">We'll use this information to set up your account</p>
            
            <div className="form-group">
              <label className="form-label">
                <User size={18} /> Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                className="form-input"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                <Mail size={18} /> Email Address *
              </label>
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                <Phone size={18} /> Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                className="form-input"
                placeholder="+1 (555) 123-4567"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                <MapPin size={18} /> Your Address
              </label>
              <input
                type="text"
                name="address"
                className="form-input"
                placeholder="123 Main St, City, Country"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
          </div>
        );

      case 1:
        return (
          <div className="form-section">
            <h2>Property Details</h2>
            <p className="section-description">Help guests understand your space</p>
            
            <div className="form-group">
              <label className="form-label">Property Name *</label>
              <input
                type="text"
                name="propertyName"
                className="form-input"
                placeholder="Luxury Downtown Apartment"
                value={formData.propertyName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Property Address *</label>
              <input
                type="text"
                name="propertyAddress"
                className="form-input"
                placeholder="Full address"
                value={formData.propertyAddress}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Property Type</label>
                <select
                  name="propertyType"
                  className="form-select"
                  value={formData.propertyType}
                  onChange={handleChange}
                >
                  <option value="">Select type</option>
                  <option value="apartment">Apartment</option>
                  <option value="villa">Villa/House</option>
                  <option value="studio">Studio</option>
                  <option value="penthouse">Penthouse</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Bedrooms *</label>
                <input
                  type="number"
                  name="bedrooms"
                  className="form-input"
                  min="0"
                  value={formData.bedrooms}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Bathrooms</label>
                <input
                  type="number"
                  name="bathrooms"
                  className="form-input"
                  min="0"
                  step="0.5"
                  value={formData.bathrooms}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Max Guests</label>
                <input
                  type="number"
                  name="maxGuests"
                  className="form-input"
                  min="1"
                  value={formData.maxGuests}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Property Size (sq ft)</label>
                <input
                  type="number"
                  name="propertySize"
                  className="form-input"
                  value={formData.propertySize}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Description</label>
              <textarea
                name="description"
                className="form-textarea"
                placeholder="Describe your property, its unique features, and what makes it special..."
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Amenities</label>
              <div className="amenities-grid">
                {amenitiesList.map(amenity => (
                  <label key={amenity} className="amenity-checkbox">
                    <input
                      type="checkbox"
                      checked={formData.amenities.includes(amenity)}
                      onChange={() => handleAmenityToggle(amenity)}
                    />
                    <span>{amenity}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="form-section">
            <h2>Pricing & Availability</h2>
            <p className="section-description">Set your rates and calendar</p>
            
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Base Price per Night (USD) *</label>
                <input
                  type="number"
                  name="basePrice"
                  className="form-input"
                  placeholder="100"
                  min="0"
                  value={formData.basePrice}
                  onChange={handleChange}
                  required
                />
                <small className="form-hint">We'll optimize pricing based on demand</small>
              </div>

              <div className="form-group">
                <label className="form-label">Cleaning Fee (USD)</label>
                <input
                  type="number"
                  name="cleaningFee"
                  className="form-input"
                  placeholder="50"
                  min="0"
                  value={formData.cleaningFee}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Available From *</label>
                <input
                  type="date"
                  name="availableFrom"
                  className="form-input"
                  value={formData.availableFrom}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Minimum Stay (nights)</label>
                <input
                  type="number"
                  name="minimumStay"
                  className="form-input"
                  min="1"
                  value={formData.minimumStay}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">House Rules</label>
              <textarea
                name="houseRules"
                className="form-textarea"
                placeholder="E.g., No smoking, No parties, Check-in after 3 PM..."
                value={formData.houseRules}
                onChange={handleChange}
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="form-section">
            <h2>Photos & Final Steps</h2>
            <p className="section-description">Upload photos and complete your registration</p>
            
            <div className="form-group">
              <label className="form-label">Property Photos</label>
              <div className="photo-upload-area">
                <input
                  type="file"
                  id="photos"
                  multiple
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  style={{ display: 'none' }}
                />
                <label htmlFor="photos" className="upload-label">
                  <Upload size={48} />
                  <p>Click to upload photos</p>
                  <small>Upload at least 5 high-quality photos</small>
                </label>
                {formData.photos.length > 0 && (
                  <div className="uploaded-photos">
                    <p>{formData.photos.length} photo(s) selected</p>
                  </div>
                )}
              </div>
              <small className="form-hint">
                Don't have professional photos? No problem! We offer professional photography services.
              </small>
            </div>

            <div className="pilot-program-info">
              <h3>🎉 Pilot Program Benefits</h3>
              <ul>
                <li>No upfront fees - we only earn when you earn</li>
                <li>Professional photography included</li>
                <li>30-day trial period</li>
                <li>Full dashboard access to track your earnings</li>
                <li>Dedicated support team</li>
              </ul>
            </div>

            <div className="form-group">
              <label className="agreement-checkbox">
                <input
                  type="checkbox"
                  name="agreeToPilot"
                  checked={formData.agreeToPilot}
                  onChange={handleChange}
                  required
                />
                <span>
                  I agree to participate in the pilot program and understand there's
                  a 30-day trial period with no obligations *
                </span>
              </label>
            </div>

            <div className="form-group">
              <label className="agreement-checkbox">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  required
                />
                <span>
                  I have read and agree to the Terms of Service and Privacy Policy *
                </span>
              </label>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="owner-signup">
      <div className="signup-container">
        <div className="signup-header">
          <h1>Partner With Arabian Nights</h1>
          {hostingData.hostingScore && (
            <div className="score-badge">
              Your Hosting Score: {hostingData.hostingScore}%
            </div>
          )}
        </div>

        <div className="signup-progress">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`progress-step ${index === currentSection ? 'active' : ''} ${
                index < currentSection ? 'completed' : ''
              }`}
            >
              <div className="progress-step-icon">{section.icon}</div>
              <span className="progress-step-title">{section.title}</span>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="signup-form">
          {renderSection()}

          <div className="form-navigation">
            {currentSection > 0 && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setCurrentSection(currentSection - 1)}
              >
                Previous
              </button>
            )}
            
            {currentSection < sections.length - 1 ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setCurrentSection(currentSection + 1)}
                disabled={!canProceed()}
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-primary btn-large"
                disabled={!canProceed()}
              >
                Complete Registration
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default OwnerSignup;


