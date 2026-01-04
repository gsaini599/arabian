import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Users, MapPin, Star, Check } from 'lucide-react';
import './BookingPage.css';

const BookingPage = () => {
  const { propertyId } = useParams();
  const navigate = useNavigate();

  // Mock property data
  const property = {
    id: propertyId,
    name: 'Luxury Downtown Apartment',
    location: 'Dubai Marina, Dubai, UAE',
    rating: 4.9,
    reviews: 127,
    pricePerNight: 450,
    cleaningFee: 75,
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 2,
    amenities: ['High-speed WiFi', 'Free Parking', 'Pool', 'Gym', 'Air Conditioning', 'Kitchen'],
    images: ['https://via.placeholder.com/800x600'],
    description: 'Beautiful 3-bedroom apartment with stunning city views in the heart of Dubai Marina.',
    host: 'John Doe'
  };

  const [bookingDetails, setBookingDetails] = useState({
    checkIn: '',
    checkOut: '',
    guests: 2,
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [step, setStep] = useState(1); // 1: Dates & Guests, 2: Guest Info, 3: Payment

  const handleChange = (e) => {
    setBookingDetails({
      ...bookingDetails,
      [e.target.name]: e.target.value
    });
  };

  const calculateNights = () => {
    if (bookingDetails.checkIn && bookingDetails.checkOut) {
      const checkIn = new Date(bookingDetails.checkIn);
      const checkOut = new Date(bookingDetails.checkOut);
      const diffTime = Math.abs(checkOut - checkIn);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    }
    return 0;
  };

  const calculateTotal = () => {
    const nights = calculateNights();
    const subtotal = nights * property.pricePerNight;
    const cleaningFee = property.cleaningFee;
    const serviceFee = subtotal * 0.1; // 10% service fee
    return {
      subtotal,
      nights,
      cleaningFee,
      serviceFee,
      total: subtotal + cleaningFee + serviceFee
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Process booking
      alert('Booking request submitted! We will confirm your reservation shortly.');
      navigate('/');
    }
  };

  const costs = calculateTotal();

  return (
    <div className="booking-page">
      {/* Header */}
      <div className="booking-header">
        <div className="container">
          <button className="back-btn" onClick={() => navigate('/')}>
            ← Back to Home
          </button>
        </div>
      </div>

      <div className="booking-container">
        <div className="booking-content">
          {/* Property Info */}
          <div className="property-showcase">
            <img src={property.images[0]} alt={property.name} className="property-image" />
            <div className="property-details">
              <h1>{property.name}</h1>
              <div className="property-meta">
                <div className="rating">
                  <Star size={18} fill="#f59e0b" color="#f59e0b" />
                  <span>{property.rating}</span>
                  <span className="reviews">({property.reviews} reviews)</span>
                </div>
                <div className="location">
                  <MapPin size={18} />
                  <span>{property.location}</span>
                </div>
              </div>
              
              <div className="property-specs">
                <span>{property.bedrooms} Bedrooms</span>
                <span>•</span>
                <span>{property.bathrooms} Bathrooms</span>
                <span>•</span>
                <span>Up to {property.maxGuests} Guests</span>
              </div>

              <p className="property-description">{property.description}</p>

              <div className="amenities-list">
                <h3>Amenities</h3>
                <div className="amenities-grid">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="amenity-item">
                      <Check size={16} color="#10b981" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="booking-form-section">
            <div className="booking-form-card">
              <div className="price-header">
                <div className="price">
                  <span className="amount">${property.pricePerNight}</span>
                  <span className="period">/ night</span>
                </div>
              </div>

              <div className="step-indicator">
                <div className={`step ${step >= 1 ? 'active' : ''}`}>1</div>
                <div className="step-line"></div>
                <div className={`step ${step >= 2 ? 'active' : ''}`}>2</div>
                <div className="step-line"></div>
                <div className={`step ${step >= 3 ? 'active' : ''}`}>3</div>
              </div>

              <form onSubmit={handleSubmit} className="booking-form">
                {step === 1 && (
                  <>
                    <h3>Select Dates & Guests</h3>
                    <div className="form-group">
                      <label className="form-label">
                        <Calendar size={18} /> Check-in
                      </label>
                      <input
                        type="date"
                        name="checkIn"
                        className="form-input"
                        value={bookingDetails.checkIn}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        <Calendar size={18} /> Check-out
                      </label>
                      <input
                        type="date"
                        name="checkOut"
                        className="form-input"
                        value={bookingDetails.checkOut}
                        onChange={handleChange}
                        min={bookingDetails.checkIn}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        <Users size={18} /> Number of Guests
                      </label>
                      <select
                        name="guests"
                        className="form-select"
                        value={bookingDetails.guests}
                        onChange={handleChange}
                        required
                      >
                        {[...Array(property.maxGuests)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1} {i === 0 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <h3>Your Information</h3>
                    <div className="form-group">
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-input"
                        placeholder="John Doe"
                        value={bookingDetails.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder="john@example.com"
                        value={bookingDetails.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        className="form-input"
                        placeholder="+1 (555) 123-4567"
                        value={bookingDetails.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Message to Host (Optional)</label>
                      <textarea
                        name="message"
                        className="form-textarea"
                        placeholder="Let the host know about your trip..."
                        value={bookingDetails.message}
                        onChange={handleChange}
                      />
                    </div>
                  </>
                )}

                {step === 3 && (
                  <>
                    <h3>Payment Details</h3>
                    <div className="payment-info">
                      <p>Secure payment processing powered by Stripe</p>
                      <div className="payment-methods">
                        <img src="https://via.placeholder.com/60x40?text=Visa" alt="Visa" />
                        <img src="https://via.placeholder.com/60x40?text=MC" alt="Mastercard" />
                        <img src="https://via.placeholder.com/60x40?text=Amex" alt="Amex" />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Card Number</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="1234 5678 9012 3456"
                        required
                      />
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Expiry</label>
                        <input
                          type="text"
                          className="form-input"
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">CVV</label>
                        <input
                          type="text"
                          className="form-input"
                          placeholder="123"
                          required
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Price Breakdown */}
                {bookingDetails.checkIn && bookingDetails.checkOut && (
                  <div className="price-breakdown">
                    <h4>Price Details</h4>
                    <div className="price-row">
                      <span>${property.pricePerNight} × {costs.nights} nights</span>
                      <span>${costs.subtotal}</span>
                    </div>
                    <div className="price-row">
                      <span>Cleaning fee</span>
                      <span>${costs.cleaningFee}</span>
                    </div>
                    <div className="price-row">
                      <span>Service fee</span>
                      <span>${costs.serviceFee.toFixed(2)}</span>
                    </div>
                    <div className="price-row total">
                      <span>Total (USD)</span>
                      <span>${costs.total.toFixed(2)}</span>
                    </div>
                  </div>
                )}

                <div className="form-actions">
                  {step > 1 && (
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setStep(step - 1)}
                    >
                      Back
                    </button>
                  )}
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={!bookingDetails.checkIn || !bookingDetails.checkOut}
                  >
                    {step === 3 ? 'Confirm & Pay' : 'Continue'}
                  </button>
                </div>
              </form>

              {/* iCal Sync Info */}
              {step === 1 && (
                <div className="ical-info">
                  <p>
                    📅 Calendar synced across all major platforms. 
                    Your dates are always up-to-date.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;

