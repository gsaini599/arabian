# Arabian Nights - Property Management Platform

A comprehensive React-based property management platform designed to help homeowners list, manage, and grow their rental business across multiple platforms like Airbnb, Booking.com, and more.

## 🌟 Features

### For Property Owners
- **Simple Dashboard**: Track earnings, bookings, and forecasts with clean metrics
- **Hosting Ability Assessment**: Evaluate property potential before signing up
- **Transparent Reporting**: See exactly what you're making with no information overload
- **Vendor Network Access**: Connect with trusted local service providers

### For Arabian Nights Team
- **Department-Specific Dashboards**:
  - **Revenue**: Track income, pricing strategies, and financial performance
  - **Reservations**: Manage bookings, calendar sync, and occupancy
  - **CRM**: Handle guest relationships and inquiries
  - **Marketing**: Monitor campaigns and platform performance
  - **Finance**: Process payments, invoices, and financial reporting
  - **Operations**: Coordinate maintenance, cleaning, and property management (Admin-1 access)
  - **Business Development**: Manage partnerships and growth initiatives (Admin-1 access)

### Vendor Marketplace
- **Service Provider Registration**: Vendors can register and showcase their services
- **Categorized Listings**: Filter by service type, location, and ratings
- **Verified Badges**: Build trust with verified service providers
- **Direct Booking**: Property owners can directly contact and hire vendors

### Booking System
- **Multi-step Booking Flow**: Intuitive guest booking experience
- **Calendar Integration**: iCal sync across all platforms
- **Global Payment Support**: Accept payments from guests worldwide
- **Real-time Availability**: Synchronized calendars prevent double bookings

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd arabian
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
arabian/
├── public/              # Static files
├── src/
│   ├── pages/          # Main page components
│   │   ├── LandingPage.js
│   │   ├── HostingAbilityCheck.js
│   │   ├── OwnerSignup.js
│   │   ├── OwnerDashboard.js
│   │   ├── VendorMarketplace.js
│   │   ├── VendorRegistration.js
│   │   ├── BookingPage.js
│   │   ├── Login.js
│   │   └── dashboards/     # Department dashboards
│   │       ├── DashboardLayout.js
│   │       ├── RevenueDashboard.js
│   │       ├── ReservationDashboard.js
│   │       ├── CRMDashboard.js
│   │       ├── MarketingDashboard.js
│   │       ├── FinanceDashboard.js
│   │       ├── OperationsDashboard.js
│   │       └── BDDashboard.js
│   ├── App.js          # Main app with routing
│   ├── App.css         # Global styles
│   └── index.js        # Entry point
└── package.json
```

## 🎨 Design Philosophy

### Modern & Elegant
- Clean, minimalist interface inspired by Airbnb
- Professional color scheme with gold accents (#d4af37)
- Smooth animations and transitions
- Responsive design for all devices

### User Experience
- **Owners**: Simple, number-focused dashboards with no complexity
- **Staff**: Detailed, role-specific dashboards with relevant tools
- **Vendors**: Easy registration and professional presentation
- **Guests**: Streamlined booking process

## 🔐 Authentication & Access Control

### User Roles
1. **Property Owners**: Limited access to personal dashboard only
2. **Revenue Team**: Revenue dashboard
3. **Reservation Team**: Reservation dashboard
4. **CRM Team**: CRM dashboard
5. **Marketing Team**: Marketing dashboard
6. **Finance Team**: Finance dashboard
7. **Operations Team**: Operations dashboard + Admin-1 access
8. **Business Development Team**: BD dashboard + Admin-1 access

## 📊 Key Metrics (Owner Dashboard)

Owners see only essential information:
- **Current Month Earnings**: Total income with percentage change
- **On Books**: Confirmed bookings and revenue
- **Forecast**: Next month's projected earnings
- **Inquiries**: Total, pending, confirmed, and declined inquiries

## 🛠️ Technology Stack

- **Frontend**: React 18
- **Routing**: React Router v6
- **Charts**: Recharts
- **Icons**: Lucide React
- **Styling**: Custom CSS with CSS Variables
- **State Management**: React Hooks

## 🌐 Multi-Platform Integration

The platform is designed to support:
- Airbnb
- Booking.com
- Direct bookings
- iCal calendar synchronization
- Global payment processing

## 🔄 Workflow

1. **Property Owner Journey**:
   - Completes hosting ability assessment
   - Fills out property information
   - Signs up for pilot program
   - Accesses simple dashboard to monitor earnings

2. **Vendor Journey**:
   - Browses or gets recommended by system
   - Registers business with credentials
   - Gets listed in marketplace
   - Receives booking requests from owners

3. **Guest Journey**:
   - Browses available properties
   - Selects dates and guest count
   - Completes booking with payment
   - Calendar automatically synced

## 🎯 Business Model

Arabian Nights handles:
- Listing creation and optimization
- Marketing across platforms
- Guest communication and management
- Calendar synchronization
- Payment processing
- Operations coordination

Property owners:
- Provide property access
- Receive transparent earnings reports
- Monitor business through dashboard
- Access vendor network for additional services

## 📱 Responsive Design

The application is fully responsive and works seamlessly on:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🚧 Future Enhancements

- Real-time notifications
- Mobile app (React Native)
- Advanced analytics and reporting
- AI-powered pricing optimization
- Automated review management
- Multi-language support
- WhatsApp integration
- Payment gateway integration
- Document management system

## 📄 License

Copyright © 2025 Arabian Nights. All rights reserved.

## 🤝 Contributing

This is a proprietary project. For inquiries, please contact the development team.

## 📞 Support

For technical support or questions, please contact:
- Email: support@arabiannights.com
- Website: https://arabiannights.com

---

Built with ❤️ by the Arabian Nights Development Team
This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



### project 

Clients: Individual Property owners Primary Clients, (PC), Vendors - Secondary Clients, (SL), Business Model / Strategic Intent We help homeowners list, manage, and grow their rental business across Airbnb, Booking.com, and other top platforms — while they relax and earn more. They will get a dashboard where they can monitor their business matrix. (The less info we give the better. In my view owners to be shown only how much is made and how much is on books and what is the forecast. Flat numbers & percentages.) They only need to know number and status of inquiries. so that it gives them confidence about future business. Arabian Nights consists of two wings. One revenue, reservation, CRMs, marketing & finance. The other wing is operations & BD. ops and bd to always have admin -1 access. Every dept will have a dedicated dashboard only related to their job. arabian nights to be able to accept bookings just like Airbnb and have a calendar sync option i-cal kinds, plus just like Airbnb payment options for people across the globe. The owners will be able to see only numbers. no other access. Vendors for areas that are outside of our approachable radius on world map the client will be shown a list of other vendors. also basically since vendors complete the hosting eco system to make this scalable hence when the owner requests for other services other than revenue and reservation the vendors page will be shown to the customer and vendors can register in the portal. and apartment owners are free to choose vendor of their choice. this will be part of the hosting ability score page. initial page check. if hosting ability is completed then the customer is taken to the info page where owner will fill all information and signup for a pilot run. 
DESIGN: Website type: Modern, elegant, and trust-driven B2C landing website theme inspired by the logo Tone: Professional + approachable (Airbnb-like warmth + premium service reliability) Target audience: Property owners (apartments, villas, vacation homes) who want help managing or listing their space online Goal: Encourage property owners to partner with your company to host, market, and manage their listings for maximum visibility and income

