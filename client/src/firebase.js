// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from"firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "genwebai-c73b6.firebaseapp.com",
  projectId: "genwebai-c73b6",
  storageBucket: "genwebai-c73b6.firebasestorage.app",
  messagingSenderId: "895618252361",
  appId: "1:895618252361:web:f2e1d5c58bafde3af6c998"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
const provider=new GoogleAuthProvider()
export {auth,provider}

