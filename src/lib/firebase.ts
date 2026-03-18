import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUAbFLBNGDPIcA6Dh4tIH2bWmv6jVEsbk",
  authDomain: "airsafe-move-3278a.firebaseapp.com",
  projectId: "airsafe-move-3278a",
  storageBucket: "airsafe-move-3278a.firebasestorage.app",
  messagingSenderId: "852057536050",
  appId: "1:852057536050:web:4a1e13869766216d4dae2b"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);
export const db = getFirestore(app);