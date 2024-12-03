// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwqJLY9ENj6-NRy_6PbjkIHJlrd166BeQ",
  authDomain: "notion-clone-838be.firebaseapp.com",
  projectId: "notion-clone-838be",
  storageBucket: "notion-clone-838be.firebasestorage.app",
  messagingSenderId: "88786313394",
  appId: "1:88786313394:web:e8c3a2064d6a51d18169ab"
};

// Initialize Firebase
const app = getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);
