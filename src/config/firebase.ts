// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyAaa8EmSN3ns2p-a7C7gax4O7U4r3_f6QM",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "mechheaven-5575c.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "mechheaven-5575c",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "mechheaven-5575c.firebasestorage.app",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "822480815829",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:822480815829:web:1ed6576c62c6212b2ac45c",
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID || "G-SBCCNWQ40P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (only in browser environment)
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Initialize Auth
export const auth = getAuth(app);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Google Auth Provider
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export { analytics };
export default app;