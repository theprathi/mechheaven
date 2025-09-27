# MechHeaven - E-commerce Platform

A modern, responsive e-commerce platform built with React, TypeScript, and Firebase.

## Features

- 🔐 Google Authentication with Firebase
- 🛒 Product showcase with real Amazon data
- 📱 Fully responsive design with light theme
- 💬 WhatsApp integration for customer support
- 🔍 Product filtering and categorization
- ⚡ Fast and modern UI with smooth animations

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: CSS3 with custom variables
- **Authentication**: Firebase Auth
- **Database**: Firestore
- **Icons**: React Icons (Feather Icons)
- **Deployment**: Ready for Vercel/Netlify

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase project setup

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd MechHeaven
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env.local
```

4. Update `.env.local` with your Firebase configuration:
```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
REACT_APP_WHATSAPP_NUMBER=your_whatsapp_number
```

5. Start the development server:
```bash
npm start
```

The app will open at `http://localhost:3000`.

## Project Structure

```
src/
├── components/          # React components
│   ├── Dashboard.tsx    # Main product dashboard
│   ├── Hero.tsx         # Landing page hero section
│   ├── Header.tsx       # Navigation header
│   ├── WhatsAppOffer.tsx # WhatsApp promotion section
│   └── ...
├── config/
│   └── firebase.ts      # Firebase configuration
├── context/
│   └── AuthContext.tsx  # Authentication context
├── services/
│   ├── authService.ts   # Authentication services
│   └── userService.ts   # User data services
└── styles/
    └── global.css       # Global styles and CSS variables
```

## Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication with Google provider
3. Create a Firestore database
4. Add your domain to authorized domains
5. Copy configuration to `.env.local`

## Firestore Security Rules

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## Environment Variables

The app uses environment variables for configuration. Never commit sensitive data to git.

Required variables:
- `REACT_APP_FIREBASE_*` - Firebase configuration
- `REACT_APP_WHATSAPP_NUMBER` - WhatsApp contact number

## Deployment

### Vercel
1. Connect your GitHub repository
2. Add environment variables in Vercel dashboard
3. Deploy automatically

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Add environment variables

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## Security

- Firebase credentials are environment-based
- Phone numbers are configurable via environment variables
- No sensitive data is committed to the repository
- Firestore security rules protect user data

## License

This project is private and proprietary.

## Support

For support, contact us via WhatsApp or email.