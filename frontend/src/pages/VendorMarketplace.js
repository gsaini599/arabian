import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Star, Wrench, Sparkles, Camera, Truck, Shield } from 'lucide-react';
import './VendorMarketplace.css';

const VendorMarketplace = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: <Shield size={20} /> },
    { id: 'cleaning', name: 'Cleaning', icon: <Sparkles size={20} /> },
    { id: 'maintenance', name: 'Maintenance', icon: <Wrench size={20} /> },
    { id: 'photography', name: 'Photography', icon: <Camera size={20} /> },
    { id: 'transport', name: 'Transport', icon: <Truck size={20} /> },
  ];

  // Mock vendor data
  const vendors = [
    {
      id: 1,
      name: 'Premium Cleaning Services',
      category: 'cleaning',
      location: 'Dubai, UAE',
      rating: 4.9,
      reviews: 234,
      price: '$$',
      description: 'Professional cleaning for vacation rentals. Same-day service available.',
      services: ['Deep Cleaning', 'Laundry', 'Restocking'],
      verified: true,
      responseTime: '< 2 hours'
    },
    {
      id: 2,
      name: 'QuickFix Maintenance',
      category: 'maintenance',
      location: 'Abu Dhabi, UAE',
      rating: 4.8,
      reviews: 189,
      price: '$$$',
      description: 'Emergency repairs and routine maintenance. Available 24/7.',
      services: ['Plumbing', 'Electrical', 'HVAC', 'General Repairs'],
      verified: true,
      responseTime: '< 1 hour'
    },
    {
      id: 3,
      name: 'Elite Property Photography',
      category: 'photography',
      location: 'Dubai, UAE',
      rating: 5.0,
      reviews: 156,
      price: '$$$$',
      description: 'Professional photography and virtual tours for listings.',
      services: ['Photography', 'Video Tours', 'Drone Shots', 'Editing'],
      verified: true,
      responseTime: '< 4 hours'
    },
    {
      id: 4,
      name: 'Crystal Clear Cleaners',
      category: 'cleaning',
      location: 'Sharjah, UAE',
      rating: 4.7,
      reviews: 201,
      price: '$',
      description: 'Affordable and reliable cleaning services for all property types.',
      services: ['Standard Cleaning', 'Deep Cleaning', 'Move-out Cleaning'],
      verified: false,
      responseTime: '< 3 hours'
    },
    {
      id: 5,
      name: 'Home Care Maintenance',
      category: 'maintenance',
      location: 'Dubai, UAE',
      rating: 4.6,
      reviews: 143,
      price: '$$',
      description: 'Preventive and corrective maintenance for residential properties.',
      services: ['Routine Inspections', 'Repairs', 'Painting', 'Carpentry'],
      verified: true,
      responseTime: '< 2 hours'
    },
    {
      id: 6,
      name: 'Airport Transfer Pro',
      category: 'transport',
      location: 'Dubai, UAE',
      rating: 4.9,
      reviews: 312,
      price: '$$',
      description: 'Reliable airport transfers and guest transportation services.',
      services: ['Airport Pickup', 'City Tours', 'Private Driver'],
      verified: true,
      responseTime: '< 30 min'
    },
  ];

  const filteredVendors = vendors.filter(vendor => {
    const matchesSearch = vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vendor.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || vendor.category === selectedCategory;
    const matchesLocation = selectedLocation === 'all' || vendor.location.includes(selectedLocation);
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div className="vendor-marketplace">
      {/* Header */}
      <div className="marketplace-header">
        <div className="container">
          <div className="header-content">
            <div>
              <h1>Vendor Network</h1>
              <p>Connect with trusted service providers for your property</p>
            </div>
            <button 
              className="btn btn-primary"
              onClick={() => navigate('/vendor-register')}
            >
              Register as Vendor
            </button>
          </div>
        </div>
      </div>

      <div className="marketplace-container">
        {/* Search and Filters */}
        <div className="search-section">
          <div className="search-bar">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search vendors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-group">
            <div className="filter-item">
              <MapPin size={18} />
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <option value="all">All Locations</option>
                <option value="Dubai">Dubai</option>
                <option value="Abu Dhabi">Abu Dhabi</option>
                <option value="Sharjah">Sharjah</option>
              </select>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="categories-section">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Vendor Grid */}
        <div className="vendors-grid">
          {filteredVendors.map(vendor => (
            <div key={vendor.id} className="vendor-card">
              {vendor.verified && (
                <div className="verified-badge">
                  <Shield size={16} />
                  Verified
                </div>
              )}
              
              <div className="vendor-header">
                <h3>{vendor.name}</h3>
                <div className="vendor-rating">
                  <Star size={16} fill="#f59e0b" color="#f59e0b" />
                  <span>{vendor.rating}</span>
                  <span className="review-count">({vendor.reviews})</span>
                </div>
              </div>

              <div className="vendor-meta">
                <span className="vendor-location">
                  <MapPin size={14} />
                  {vendor.location}
                </span>
                <span className="vendor-price">{vendor.price}</span>
              </div>

              <p className="vendor-description">{vendor.description}</p>

              <div className="vendor-services">
                {vendor.services.map((service, index) => (
                  <span key={index} className="service-tag">{service}</span>
                ))}
              </div>

              <div className="vendor-footer">
                <span className="response-time">
                  ⚡ Responds {vendor.responseTime}
                </span>
                <button className="btn btn-primary btn-small">
                  Contact Vendor
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredVendors.length === 0 && (
          <div className="no-results">
            <p>No vendors found matching your criteria.</p>
            <button 
              className="btn btn-secondary"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedLocation('all');
              }}
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* CTA for Vendors */}
        <div className="vendor-cta">
          <h2>Are You a Service Provider?</h2>
          <p>Join our network and connect with property owners who need your services</p>
          <button 
            className="btn btn-primary btn-large"
            onClick={() => navigate('/vendor-register')}
          >
            Register Your Business
          </button>
        </div>
      </div>
    </div>
  );
};

export default VendorMarketplace;

