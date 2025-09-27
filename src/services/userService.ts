import { 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  serverTimestamp,
  DocumentSnapshot,
  DocumentData 
} from 'firebase/firestore';
import { User } from 'firebase/auth';
import { db } from '../config/firebase';

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  phoneNumber?: string;
  createdAt: any;
  updatedAt: any;
  hasCompletedProfile: boolean;
}

export class UserService {
  // Create or update user profile in Firestore
  static async createUserProfile(user: User, additionalData: Partial<UserProfile> = {}): Promise<void> {
    if (!user.uid) return;

    const userRef = doc(db, 'users', user.uid);
    
    try {
      const userDoc = await getDoc(userRef);
      
      if (!userDoc.exists()) {
        // Create new user profile
        const userData: Partial<UserProfile> = {
          uid: user.uid,
          email: user.email || '',
          displayName: user.displayName || '',
          photoURL: user.photoURL || '',
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
          hasCompletedProfile: false,
          ...additionalData
        };

        await setDoc(userRef, userData);
        console.log('User profile created successfully');
      } else {
        // Update existing user profile (preserve existing data)
        const existingData = userDoc.data() as UserProfile;
        await updateDoc(userRef, {
          email: user.email || existingData.email,
          displayName: user.displayName || existingData.displayName,
          photoURL: user.photoURL || existingData.photoURL,
          updatedAt: serverTimestamp(),
          // Preserve existing profile completion status and phone number
          hasCompletedProfile: existingData.hasCompletedProfile || false,
          phoneNumber: existingData.phoneNumber || '',
          ...additionalData
        });
        console.log('User profile updated successfully');
      }
    } catch (error: any) {
      console.error('Error creating/updating user profile:', error);
      throw new Error(`Failed to save user profile: ${error.message}`);
    }
  }

  // Get user profile from Firestore
  static async getUserProfile(uid: string): Promise<UserProfile | null> {
    try {
      const userRef = doc(db, 'users', uid);
      const userDoc: DocumentSnapshot<DocumentData> = await getDoc(userRef);
      
      if (userDoc.exists()) {
        return userDoc.data() as UserProfile;
      } else {
        console.log('User profile not found');
        return null;
      }
    } catch (error: any) {
      console.error('Error fetching user profile:', error);
      throw new Error(`Failed to fetch user profile: ${error.message}`);
    }
  }

  // Update user's phone number
  static async updatePhoneNumber(uid: string, phoneNumber: string): Promise<void> {
    try {
      const userRef = doc(db, 'users', uid);
      await updateDoc(userRef, {
        phoneNumber: phoneNumber,
        hasCompletedProfile: true,
        updatedAt: serverTimestamp()
      });
      console.log('Phone number updated successfully');
    } catch (error: any) {
      console.error('Error updating phone number:', error);
      throw new Error(`Failed to update phone number: ${error.message}`);
    }
  }

  // Check if user has completed their profile (has phone number)
  static async hasCompletedProfile(uid: string): Promise<boolean> {
    try {
      const userProfile = await this.getUserProfile(uid);
      // User has completed profile if they have both a phone number and the flag is set
      return !!(userProfile?.hasCompletedProfile && userProfile?.phoneNumber);
    } catch (error) {
      console.error('Error checking profile completion:', error);
      return false;
    }
  }

  // Validate phone number format
  static validatePhoneNumber(phoneNumber: string): { isValid: boolean; message: string } {
    // Remove all non-digit characters
    const cleaned = phoneNumber.replace(/\D/g, '');
    
    // Check for Indian mobile number format (10 digits starting with 6, 7, 8, 9 only)
    const indianMobileRegex = /^[6-9]\d{9}$/;
    
    if (!cleaned) {
      return { isValid: false, message: 'Phone number is required' };
    }
    
    if (cleaned.length !== 10) {
      return { isValid: false, message: 'Phone number must be exactly 10 digits' };
    }
    
    if (!indianMobileRegex.test(cleaned)) {
      return { isValid: false, message: 'Mobile number must start with 6, 7, 8, or 9' };
    }
    
    return { isValid: true, message: '' };
  }

  // Format phone number for display
  static formatPhoneNumber(phoneNumber: string): string {
    const cleaned = phoneNumber.replace(/\D/g, '');
    if (cleaned.length === 10) {
      return `+91 ${cleaned.slice(0, 5)} ${cleaned.slice(5)}`;
    }
    return phoneNumber;
  }
}

export default UserService;